import { Component, OnInit, HostListener } from "@angular/core";
declare var Blockchain: any;
declare var Block: any;
declare var jqSimpleConnect: any;
declare var StringNumber: any;
declare var Log: any;
declare var AppHelper: any;
declare var getFormattedDate: any;
declare var firebase: any;
import * as $ from "jquery";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  public blockchain;
  public newchain;
  public indexcount = 1;
  difficulty = 0;
  modalAction = "add";
  currentAmount = "";
  miners: any;
  Leader = false;
  Mobileminers: any;
  mobileMining = false;
  mobileTransSent = false;
  nodeID: any;

  constructor() {
    this.nodeID = this.generateNetworkId();
    this.newchain = new Blockchain();
    this.blockchain = this.newchain.chain;
    this.miners = [];
    this.addMiner();
    this.addMiner();
    const config = {
      apiKey: "AIzaSyCb_UiSjW_XoIeBoEcx1IO4YhvFhlW_2Ms",
      authDomain: "blockplay-a5ff4.firebaseapp.com",
      databaseURL: "https://blockplay-a5ff4.firebaseio.com",
      projectId: "blockplay-a5ff4",
      storageBucket: "blockplay-a5ff4.appspot.com",
      messagingSenderId: "383706207111"
    };
    firebase.initializeApp(config);

    const ref = firebase
      .database()
      .ref()
      .child("networks/" + this.nodeID + "/transactions");
    const _Mobileminers = firebase
      .database()
      .ref()
      .child("networks/" + this.nodeID + "/miners");
    const _leader = firebase
      .database()
      .ref()
      .child("networks/" + this.nodeID + "/leader");
    const self = this;
    _Mobileminers.on("value", function(snapshot) {
      const trans = snapshot.val();
      self.Mobileminers = [];
      if (trans) {
        for (var _miner in trans) {
          console.log("_miner");
          console.log(_miner);
          self.Mobileminers.push({
            id: _miner,
            name: trans[_miner]["name"],
            reward: trans[_miner]["reward"],
            avatar: trans[_miner]["avatar"]
              ? trans[_miner]["avatar"]
              : "default.png"
          });
        }
        console.log(self.Mobileminers);
        self.Mobileminers.sort(self.dynamicSort("reward"));
      }
    });

    ref.on("value", function(snapshot) {
      const trans = snapshot.val();
      if (self.mobileTransSent == true) {
        if (trans.mined == true) {
          self.mobileTransSent = false;
          self.addHumanMindeBlock(trans);
        }
      }
      console.log(trans);
    });
    _leader.on("value", function(snapshot) {
      self.Leader = snapshot.val();
    });
  }

  ngOnInit() {
    AppHelper.PopOver();
  }

  generateNetworkId() {
    let nid = localStorage.getItem("netID");
    if (!nid) {
      const rand = Math.floor(Math.random() * 10000 + 1);
      nid = rand.toString();
      localStorage.setItem("netID", nid);
    }
    return nid;
  }
  public ValidIS() {
    console.log(this.newchain.isChainValid());
  }
  public addblock() {
    //this.newchain.addBlock(new Block(this.indexcount, getFormattedDate(), { amount: this.currentAmount }));
    if (this.mobileMining === false) {
      var newBlock = new Block(this.indexcount, getFormattedDate(), {
        amount: this.currentAmount
      });
      newBlock.previousHash = this.newchain.getLatestBlock().hash;

      //Broadcast new transaction to all miners
      for (let i = 0; i < this.miners.length; i++) {
        newBlock.miner = i;
        this.miners[i].worker.postMessage({
          block: newBlock,
          difficulty: this.difficulty
        });
      }
      this.indexcount += 1;
    } else {
      this.mobileTransSent = true;
      const s = this.GeneteMathProblem(this.difficulty);
      firebase
        .database()
        .ref("networks/" + this.nodeID + "/transactions")
        .set({
          mined: false,
          data: this.currentAmount,
          mathProblem: s[0],
          mathSolution: s[1],
          minedBy: "",
          numberOfTries: 0,
          miningTime: 0
        });
    }
  }

  resetMiners() {
    const _Mobileminers = firebase
      .database()
      .ref()
      .child("networks/" + this.nodeID + "/miners");
    _Mobileminers.set("null");
    this.Mobileminers = [];
  }
  addHumanMindeBlock(trans) {
    //this.newchain.addBlock(new Block(this.indexcount, getFormattedDate(), { amount: this.currentAmount }));
    var newBlock = new Block(this.indexcount, getFormattedDate(), {
      amount: trans.data
    });
    newBlock.previousHash = this.newchain.getLatestBlock().hash;
    newBlock.miner = trans.minedBy;
    newBlock.nonce = trans.mathSolution;
    newBlock.numberOfTries = trans.numberOfTries;
    newBlock.miningTime = trans.miningTime;
    this.blockchain.push(newBlock);
    this.linkBlocks(newBlock);
    this.indexcount += 1;
  }
  addMiner() {
    var Newminer = new Worker("/assets/js/miner.js");
    Newminer.addEventListener("message", this.onResponse.bind(this), false);
    this.miners.push({
      worker: Newminer,
      logs: [Log("normal", "Listening for transactions...")]
    });
  }

  onResponse(event) {
    var newBlock = event.data.block;
    var logs = event.data.logs;
    if (logs == null) {
      if (typeof this.blockchain[newBlock.index] === "undefined") {
        console.log("Mined by " + newBlock.miner);
        this.miners[newBlock.miner].logs.push(
          Log("success", "My block was accepted, i was the fastest miner 😊")
        );
        newBlock.miner = "Miner " + (newBlock.miner + 1);
        this.blockchain.push(newBlock);
        this.linkBlocks(newBlock);
      } else {
        this.miners[newBlock.miner].logs.push(
          Log(
            "error",
            "My block was not accepted, i was not the fastest miner 😞"
          )
        );
      }
    }
    if (logs != null) {
      this.miners[newBlock.miner].logs.push(logs);
    }
  }
  linkBlocks(newBlock) {
    var parent = AppHelper.StringNumber("#block-", newBlock.index - 1);
    var child = AppHelper.StringNumber("#block-", newBlock.index);
    setTimeout(function() {
      if (newBlock.index % 6 === 0) {
        AppHelper.PadBlock(child);
      }
      let color = AppHelper.getRandomColor();
      AppHelper.ColorBlock(child, color);
      jqSimpleConnect.connect(parent, child, {
        color: color,
        anchorA: "vertical",
        anchorB: "horizontal"
      });
      AppHelper.PopOver();
    }, 30);
  }

  dynamicSort(property) {
    var sortOrder = -1;
    if (property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
    }
    return function(a, b) {
      var result =
        a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
      return result * sortOrder;
    };
  }

  GeneteMathProblem(diffculity) {
    const operator = ["+", "-"];
    let solution = 0;
    let equaption = "";

    for (let i = 0; i <= diffculity; i++) {
      const op = operator[Math.floor(Math.random() * operator.length)];
      const no = Math.floor(Math.random() * (diffculity * 10));
      if (i == 0) {
        solution = no;
      } else {
        switch (op) {
          case "+":
            solution += no;
            break;
          case "-":
            solution -= no;
            break;
        }

        equaption += "<op> " + op + "</op> ";
      }
      equaption += "<no>" + no + "</no>";
    }
    return [equaption, solution];
  }
  @HostListener("window:resize", ["$event"])
  onResize(event) {
    jqSimpleConnect.repaintAll();
  }

  ToggleMenu() {
    $(".navbar-nav").toggleClass("slide-in");
    $(".side-body").toggleClass("body-slide-in");
  }
}
