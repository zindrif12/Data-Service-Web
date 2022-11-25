const submitEnquiry = () => {
    var crdnum = document.getElementById("crdnum").value;
    var name = document.getElementById("fname").value;
    var date = document.getElementById("date").value;
    var cvv = document.getElementById("cvv").value;
    var data = {
      crdnum:crdnum,
        name: name,
        date:date,
        cvv:cvv,
    }
    localStorage.setItem("payment", JSON.stringify(data));
    
  successNotification();
    
}

const successNotification = () => {
 
  window.location.href = "./success.html";

}

const validateForm = () => {
    var crdnum = document.getElementById("crdnum").value;
    var name = document.getElementById("fname").value;
    var date = document.getElementById("date").value;
    var cvv = document.getElementById("cvv").value;
    if (crdnum == "") {
        alert("Please enter your card number");
        return false;
    }
    if (name == "") {
        alert("Please enter your card holder name");
        return false;
    }
    if (date == "") { 
        alert("Please enter your expiry date");
        return false;
    }
    if (cvv == "") {
        alert("Please enter your cvv");
        return false;
    }
    else {
        submitEnquiry();
    }
}

const cancel = () => {
  localStorage.clear();
    window.location.href = "./index.html";
}

var div = document.createElement("div");
    var formData= JSON.parse(localStorage.getItem("enquiry"));
    console.log(formData);

    div.innerHTML = `
    
    <main id='container'>
<aside id='info'>
  <label for='paymentMethod'><h2>Payment Method</h2></label>
  <select name='paymentMethod'>
      <option>Visa</option>
      <option>MasterCard</option>
      <option>Elo</option>
  </select>

  <!-- Credit Card Number -->
  <label for='cardNumber'><h2>Credit Card Number</h2></label>
  <input type='text' name='cardNumber' id="crdnum" required name="number" required/>

  <!-- Credit Card Holder Name -->
  <label for='cardholderName'><h2>Cardholder Name</h2></label>
  <input type='text' id="fname" name='cardholderName' />


  <br><br>
  <!-- Expiration Date -->
  <label for='cardDate'><h3>Expire Date</h3></label>
  <input type='text' id="date" name='cardDate' />

  <!-- CVV Card Number -->
  <label for='cvv'><h3>CVV</h3></label>
  <input type='text' id="cvv" name='cvv' />
  <button type="button" id='makePayment' onclick="validateForm()">MAKE A PAYMENT</button>
</aside>
<aside id='description'>
<br><br><br><br>
<p><h2 style="color: black;">Data Plan: ${formData.name}</h2></p>
<p><h2 style="color: black;">Phone: ${formData.phone}</h2></p>
<p><h2 style="color: black;">Extra Data: ${formData.extraData}</h2></p>
<p><h2 style="color: black;">Total Price: ${"$"+formData.totalPrice}</h2></p>
<button  onClick="window.location.href='./enquiry.html'" id='editOrder'>Edit the Order</button>
<button  onClick="cancel()" id='editOrder'>Cancel</button>
</aside>
</main>
`;


document.body.appendChild(div);