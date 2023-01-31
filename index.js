console.log("hello suraj.")
// $(()=>{
//     $("#toggle").click(()=>{
//         $("#shop").hide();

//         });

// });
// window size for mobile//



$(()=>{
  $(document).on("blur","#PassWord",()=>{
    var pass="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}";
    // var pass1="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}";
    // var passNum="(?=.*\d)";
    // var passLower="(?=.*[a-z])";
    // var passUpper="(?=.*[A-Z])"
    var ent=$("#PassWord").value;
   if(ent=pass){
    $("#FinalSign").prop("disabled",false)
   }else{
    $("#para").html("password must contain 1 upper case one lower case and must have 8 characters");
    $("#FinalSign").prop("disabled",true)
   
   }
 
 
   
   
  })
  
})

var alignStuff = () => {

  WindowWidth = $(window).width();

  if (WindowWidth < 600) {
    $("#fav").hide();
    var search = $("#search_flex").show();
    $("#showSearch").html(search);
    $("#shop").css("font-size", "20px");
    $("#heart").hide();
    $("nav").css("padding", "0px");
    $("#menu").hide();
    $("#Foot").css("height", "auto");
    $("#Foot").css("text-align", "left");
    $("#searchBar").css("width", "30%");
    $("#customerImg").css("width", "110%")
    $("#customerImg").css("height", "100%")
    $("#customerImg").css("margin-top", "20px");
    $(".cardCategory").css("width", "330px");
    $(".img").css("width", "150px");
    $(".img").css("height", "115px");




  } else {
    $("#search_flex").hide();
    $("#navbarNav").css("margin-left", "150px");
  }
}

$(document).ready(() => {
  alignStuff();
})

$(window).resize(() => {
  alignStuff();
});
$(() => {
  $("#search_flex").show()
});
// window size for mobile End//
//Loading page in main raw code //
var loadpage = (view) => {
  $.ajax({
    method: "get",
    url: view,
    success: (data) => {
      $("#main").html(data)
    }
  })
}
//Loadping page in main raw code End //
$(() => {
  //loading page clicking on modal login button//
  $(document).on("click", "#LogNow", () => {
    loadpage("login.html");
    $("#showSearch").hide();
    $("#Foot").hide();
  });
  //loading page clicking on modal login button//
  //loading page clicking on login page create account button//
  $(document).on("click", "#CreateAcc", () => {
    loadpage("createAcc.html");
    $("#Foot").hide();

  });
  // $(document).on("click","#logOut",()=>{

  // })
  //loading page clicking on login page create account button End//
  //loadimg page clicking on modal create account button //

  $(document).on("click", "#accCre", () => {
    loadpage("createAcc.html");

  })
});

//by clicking modal login btn navigation bar login button and search box hides//
$(() => {
  $("#LogNow").click(() => {
    $("#sign").hide();
    $("#search_flex").hide();
  })
});

//after clicking login button in login form navigates page on products page//
// $(() => {
//   $(document).on("click", "#FinalLog", () => {
//     loadpage("product.html");
//     loadproduct();
//     $("#searchBar").hide();
//     $("#search_flex").show();
//     $("#Foot").show();

//   });

// });
//by dafault this hme page will be loaded //
$(() => {
  loadpage("home.html")
});
//on clicking main sign up button loading page//

$(() => {
  $(document).on("click", "#FinalSign", () => {
    loadpage("login.html");
    $("#Foot").hide();
    $("#search_flex").hide();
  })
})
//on ckicking on navigation bar pages options page loading page //
$(() => {

  $("#HomePage").click(() => {
    loadpage("home.html");
    $("#Foot").show();
  });
  $("#UstSer").click(() => {
    loadpage("Custmer.html");
    $("#search_flex").hide();
    $("#Foot").show();
  });
  $("#Deals").click(() => {
    loadpage("Deals.html")
  });
  $("#HomeCanvas").click(() => {
    loadpage("home.html");
    $("#search_flex").hide();
  });
  $("#UserCan").click(() => {
    loadpage("Custmer.html");
    $("#showSearch").hide();

  });
  $("#DealsCan").click(() => {
    loadpage("Deals.html");
  });
  $("#ProductsNav").click(() => {
    loadpage("product.html");
    loadproduct("https://fakestoreapi.com/products");
    $("#searchBar").hide();
  });
  $("#AccountNav").click(() => {
    loadpage("Account.html");
  });
  $("#heart").click(() => {
    loadpage("fav.html");
  });
  $("#cart").click(() => {
    loadpage("cart.html");
  });


});
//on ckicking on Footer bar pages options page loading page //
$(() => {
  $("#AboutUs").click(() => {
    loadpage("about.html")
    $("#showSearch").hide();
  });
  $("#OurSer").click(() => {
    loadpage("Custmer.html")
    $("#showSearch").hide();
  });
  $("#careers").click(() => {
    loadpage("careers.html")
  });
  $("#ProductsFoot").click(() => {
    loadpage("product.html");
    loadproduct();
    $("#searchBar").hide();
  });
  $("#AccountFoot").click(() => {
    loadpage("Account.html");
  });
  $("#FavFoot").click(() => {
    loadpage("Fav.html");
  });
});
//loadomg products on rating//
var loadproductOnRating = (url) => {
  $.ajax({
    method: "get",
    url: url,
    success: (datas) => {
      $("#productLoad").html("");
      for (var data of datas) {

        $(`<div class="card m-3" style="width: 18rem;">
      <img src="${data.image}" class="card-img-top" width="90%" height="160px" alt="...">
      <div class="card-body">
        <h5 class="card-title m-2">Price ${data.price} ₹</h5>
        <h6 class="card-subtitle m-2">${data.title}</h6>
        <h6 class="m-2">Ratings ${data.rating.rate}</h6>
        <div class="card-footer d-flex justify-content-between m-2">
        <div class="">
              <button class="btn btn-warning p-2">Buy</button>
          </div>
          <div>
            <button class="btn btn-primary p-2"> <i class="bi bi-cart"></i>Cart  </button>
            <div class="float-end ms-4">
             <i class="bi bi-heart-fill"></i>
            </div>
              </div>

        </div>
        
      
      </div>
      </div>`).appendTo("#productLoad")
      }
    }

  })
};



//loading all the products function// 
var loadproduct = (url) => {
  $.ajax({
    method: "get",
    url: url,
    success: (datas) => {
      $("#productLoad").html("");
      for (var data of datas) {

        $(`<div class="card m-3" style="width: 18rem;">
      <img src="${data.image}" class="card-img-top" width="90%" height="160px" alt="...">
      <div class="card-body">
        <h5 class="card-title m-2">Price ${data.price} ₹</h5>
        <h6 class="card-subtitle m-2">${data.title}</h6>
        <h6 class="m-2">Ratings ${data.rating.rate}</h6>
        <div class="card-footer d-flex justify-content-between m-2">
        <div class="">
              <button class="btn btn-warning p-2">Buy</button>
          </div>
          <div>
            <button class="btn btn-primary p-2"> <i class="bi bi-cart"></i>Cart  </button>
            <div class="float-end ms-4">
             <i class="bi bi-heart-fill"></i>
            </div>
              </div>

        </div>
        
      
      </div>
      </div>`).appendTo("#productLoad")
      }
    }

  })
};
//on
//loading categories from API in Search bar//

var loadcategories = (url) => {
  $.ajax({
    method: "get",
    url: url,
    success: (datas) => {
      datas.unshift("All")
      for (var data of datas) {
        $(`<option class="option">${data}</option>`).appendTo("#select")
      }
    }
  })
};
//loading categories from API in Search product page//
var loadcatonprod = (url) => {
  $.ajax({
    method: "get",
    url: url,
    success: (datas) => {
      datas.unshift("All")
      for (var data of datas) {
        $(`<option class="option">${data}</option>`).appendTo("#selectProducCat")
      }
    }
  })
};
//on change product page select loading products//
var onchange = () => {

  var CatgoryChangepro = $("#selectProducCat").val();

  if (CatgoryChangepro == "All") {
    loadproduct("https://fakestoreapi.com/products");
    $("#searchBar").hide();
  }
  else {
    loadproduct(`https://fakestoreapi.com/products/category/${CatgoryChangepro}`)
    $("#searchBar").hide();
  };

};




//function call of loading products//
$(() => {
  loadcategories("https://fakestoreapi.com/products/categories");

  loadproduct("https://fakestoreapi.com/products")
  loadcatonprod("https://fakestoreapi.com/products/categories");


});



// $(document).on("click", "#loginbtn", () => {
//   $.ajax({
//     method: "get",
//     url: "http://127.0.0.1:3300/customers",
//     success: (customers) => {
//       var customer = customers.find(
//         (c) =>
//           c.userid == $("#txtId").val() && c.password == $("#txtPwd").val()
//       );
//       if (
//         customer.userid == $("#txtId").val() &&
//         customer.password == $("#txtPwd").val()
//       ) {
//         $.cookie("userid", $("#txtId").val());
//-------loging creating cookies and loading product page------------//
$(() => {
  $(document).on("click", "#FinalLog", () => {

    $.ajax({
      method: "get",
      url: "http://127.0.0.1:3366/login",
      success: (customers) => {

        var customer = customers.find(
          (c) =>
            c.UserName == $("#txtUserName").val() && c.Password == $("#txtPwd").val()
        );
          
        if (customer.UserName == $("#txtUserName").val() && customer.UserName == $("#txtPwd").val()) {
 alert("suraj")
          loadpage("cart.html")
          $.cookie("UserName",$("#txtUserName").val())

          
        }
      
      }
    })
})
$("#logOut").click(()=>{
  
  $.removeCookie('UserName')
  alert("You Logged Out")
  loadpage("login.html")
})
});
 //===========on show account details======show all details==== //

$(()=>{
  $("#AccountNav").click(()=>{
   
    $.ajax({
      method:"get",
      url:"http://127.0.0.1:3366/accountdetails",
      success:(datas)=>{
        for(var data of datas){
          if($.cookie('UserName')==data.UserName){
            $(`<dl>
            <dt>UserName</dt>
            <dd>${data.UserName}</dd>
            </dl>
            <dt>Name</dt>
            <dd>${data.Name}</dd>
            </dl>
            <dt>Email</dt>
            <dd>${data.Email}</dd>
            </dl>
            <dt>Mobile</dt>
            <dd>${data.Mobile}</dd>
            </dl>
            <dt>Password</dt>
            <dd></dd>
            </dl>
            `).appendTo($("#Details"))
          }
         
        }
      }
    })
  })
})


$(document).on("click", "#FinalSign", ()=>{
  var customer = {
     
     UserName: $("#UserName").val(),
     Name: $("#Name").val(),
    Password:$("#PassWord").val(),
     Email: $("#Email").val(),
     Mobile: $("#tel").val()
  };
  $.ajax({
     method: "post",
     url: "http://127.0.0.1:3366/signup",
     data: customer
  })
  alert("Registered Successfully..");
  loadpage("login.html")
});



















































































 // var CatgoryChange = $("#select").val();

  // if(CatgoryChange=="All"){
  //   loadproduct("https://fakestoreapi.com/products");


  // }
  // else{
  //   loadproduct(`https://fakestoreapi.com/products/category/${CatgoryChange}`);

  // };