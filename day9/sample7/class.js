console.log("class");
function credit(){
  console.log("");
}

function debit(){
  console.log("");
}

function loan(){
  console.log("");
}

class Hdfc{
  credit(){
    console.log("Hdfc credit");
  }

  debit(){
    console.log("Hdfc debit");
  }

  loan(){
    console.log("Hdfc loan");
  }
}
let h = new Hdfc();
h.credit();
h.debit();
h.loan();
