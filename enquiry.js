var selectedData = JSON.parse(localStorage.getItem("selectedProduct"));
const addExtraData = () => {
    if (document.getElementById("extraData").disabled) {
        document.getElementById("extraData").disabled = false;
    } else {
        document.getElementById("extraData").disabled = true;
    }  
}

setTimeout(function(){
       setValue();
    }, 100);


const setValue = () => {
if (document.getElementById("totalPrice").innerHTML == "") {
    document.getElementById("totalPrice").innerHTML = selectedData.price;
}
}





const calculatePrice = () => {
    var extraData = document.getElementById("extraData").value;
    var extraDataPrice = extraData * 3;
    var totalPrice =parseInt(selectedData.price) + extraDataPrice;
    document.getElementById("totalPrice").innerHTML = totalPrice;  
}

const submitEnquiry = () => {
    var name = document.getElementById("fname").value;
    var phone = document.getElementById("pnumber").value;
    var extraData = document.getElementById("extraData").value;
    var extraDataPrice = extraData * 3;
    var totalPrice = parseInt(selectedData.price) + extraDataPrice;
    var data = {
        name: name,
        phone: phone,
        extraData: extraData,
        totalPrice: totalPrice
    }
    localStorage.setItem("enquiry", JSON.stringify(data));
    window.location.replace("payments.html");
  
    
}

const formValidate = () => {
    var name = document.getElementById("fname").value;
    var phone = document.getElementById("pnumber").value;
    var extraData = document.getElementById("extraData").value;

    if (phone == "") {
        alert("Please enter your phone number");
        return false;
    } else {
        submitEnquiry();
    
    }

  
    
}

var formData= JSON.parse(localStorage.getItem("enquiry"));
console.log(formData);


  var div = document.createElement("div");
  div.classList.add("price");

  div.innerHTML = `
  <div class="container">
  <form method="post" autocomplete="on">
        <div class="box">
      <label for="firstName" class="fl fontLabel"> <h3>Data Plan: </h3></label>
            <div class="new iconBox">
        <i class="fa fa-user" aria-hidden="true"></i>
      </div>
            <div class="fr">
                    <input type="text" style="color:white" name="firstName" placeholder="First Name"
          class="textBox" id="fname" value= ${selectedData.name} disabled autofocus="on" required>
            </div>
            <div class="clr"></div>
        </div>
        <br><br>

        <div class="box">
      <label for="secondName" class="fl fontLabel"><h3>Price:</h3> </label>
            <div class="fl iconBox"><i class="fa fa-user" aria-hidden="true"></i></div>
            <div class="fr">
                    <input type="text" style="color:white" required name="secondName"
          placeholder="Last Name" value= ${"$"+selectedData.price} disabled class="textBox">
            </div>
            <div class="clr"></div>
        </div>
        <br><br>

        <div class="box">
            <label for="secondName" class="fl fontLabel"><h3> Data Capacity:</h3> </label>
                  <div class="fl iconBox"><i class="fa fa-user" aria-hidden="true"></i></div>
                  <div class="fr">
                          <input type="text" style="color:white" required name="secondName"
                placeholder="Last Name" value= ${selectedData.dataSize} disabled class="textBox">
                  </div>
                  <div class="clr"></div>
              </div>
              <br><br>

        <div class="box">
      <label for="phone" class="fl fontLabel"><h3> Phone No.: </h3></label>
            <div class="fl iconBox"><i class="fa fa-phone-square" aria-hidden="true"></i></div>
            <div class="fr">
                    <input type="text" id="pnumber" required name="phoneNo" maxlength="10" placeholder="Phone No." class="textBox" required>
            </div>
            <div class="clr"></div>
        </div>
        <br><br>


        <div class="box">
            <label for="extraGb"><h2 style="color:white">Do you need to add more Data?</h2></label>
            <input type="checkbox" id="extra" name="extra" value="extra" onclick="addExtraData() "> 
            <br><br>
            <label for="extraData"><h2 style="color:white">Extra Data</h2></label>
            <input type="number" style = "height:30px;width:200px;" id="extraData" min="0" name="extraData" placeholder="Extra Data" required="required" disabled onchange="calculatePrice()">
        </div>
        <br><br><br><br><br><br><br><br><br>
        <div class="myDiv">
             <h2>Total Price :</h2>
             <h1>$<label for="totalPrice" id="totalPrice"></label></h1>
        </div>
        <br><br><br>
        <div class="box" style="background: #2d3e3f">
                <input type="button" name="Submit" class="submit" value="SUBMIT" onclick=" formValidate()">
        </div>
  </form>
</div>
    `;

    document.body.appendChild(div);
