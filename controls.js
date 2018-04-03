var color = document.getElementById("color");
var preview = document.getElementById("preview");
var num = document.getElementById("num");
var rangee = document.getElementById("range");
var numhair = 1;
var numeyes = 1;
var numnose = 1;
var nummouth = 1;
var disp = document.getElementById("display");
var timer = null;


color.addEventListener("change", function(){
    preview.style.backgroundColor = color.value;
});

num.addEventListener("click", function(){
    changeType("number");
});

rangee.addEventListener("click", function(){
    changeType("range")
});

document.getElementById("first").addEventListener("change", function(){
    document.getElementById("hair").style.width = this.value + "%"
});

document.getElementById("second").addEventListener("change", function(){
    document.getElementById("eyes").style.width = this.value + "%"
});

document.getElementById("third").addEventListener("change", function(){
    document.getElementById("nose").style.width = this.value + "%"
});

document.getElementById("forth").addEventListener("change", function(){
    document.getElementById("mouth").style.width = this.value + "%"
});

document.getElementById("hair").addEventListener("click", function(){
    
    if (1 < numhair <= 3){
        numhair += 1;
        this.src = "img/hair"+numhair+".png";
    } if (numhair == 4){
        numhair = 1;
        this.src = "img/hair"+numhair+".png";
    }
     
    
});


document.getElementById("eyes").addEventListener("click", function(){
    
    if (1 < numeyes <= 3){
        numeyes += 1;
        this.src = "img/eyes"+numeyes+".png";
    } if (numeyes == 4){
        numeyes = 1;
        this.src = "img/eyes"+numeyes+".png";
    }
        
});


document.getElementById("nose").addEventListener("click", function(){ 
    if (1 < numnose <= 3){
        numnose += 1;
        this.src = "img/nose"+numnose+".png";
    } if (numnose == 4){
        numnose = 1;
        this.src = "img/nose"+numnose+".png";
    }
         
});


document.getElementById("mouth").addEventListener("click", function(){
    
    if (1 < nummouth <= 3){
        nummouth += 1;
        this.src = "img/mouth"+nummouth+".png";
    } if (nummouth == 4){
        nummouth = 1;
        this.src = "img/mouth"+nummouth+".png";
    }
});

document.getElementById("plus").addEventListener("click", function(){
    createFace();
});

document.getElementById("random").addEventListener("click", function(){
    randomFace();
});

function changeType(type){
    document.getElementById("first").type = type;
    document.getElementById("second").type = type;
    document.getElementById("third").type = type;
    document.getElementById("forth").type = type;
};

function createFace(){
    var ndiv = document.createElement("div");
    var nhair = document.createElement("img");
    var neyes = document.createElement("img");
    var nnose = document.createElement("img");
    var nmouth = document.createElement("img");
    ndiv.className = "col-xl-1 col-lg-1.5 col-md-2 col-sm-3";
    ndiv.style.cssText = "width: 100px;height: 100px;display: inline-block;position: relative";
    nhair.style.top = document.getElementById("hair").style.top;
    neyes.style.top = document.getElementById("eyes").style.top;
    nnose.style.top = document.getElementById("nose").style.top;
    nmouth.style.top = document.getElementById("mouth").style.top;
    nhair.style.width = document.getElementById("hair").style.width;
    neyes.style.width = document.getElementById("eyes").style.width;
    nnose.style.width = document.getElementById("nose").style.width;
    nmouth.style.width = document.getElementById("mouth").style.width;
    nhair.className = 'items';
	neyes.className = 'items';
	nnose.className = 'items';
	nmouth.className = 'items';
    nhair.src = document.getElementById("hair").src;
    neyes.src = document.getElementById("eyes").src;
    nnose.src = document.getElementById("nose").src;
    nmouth.src = document.getElementById("mouth").src;
    ndiv.style.backgroundColor = preview.style.backgroundColor;
    ndiv.appendChild(nhair);
    ndiv.appendChild(neyes);
    ndiv.appendChild(nnose);
    ndiv.appendChild(nmouth);
    disp.appendChild(ndiv);
    ndiv.addEventListener("click", function(){
        disp.removeChild(this);
    });
};

function randomFace(){
    var num1 = Math.floor((Math.random() * 3) + 1);
    var num2 = Math.floor((Math.random() * 3) + 1);
    var num3 = Math.floor((Math.random() * 3) + 1);
    var num4 = Math.floor((Math.random() * 3) + 1);
    var num5 = Math.floor((Math.random() * 70) + 0);
    var num6 = Math.floor((Math.random() * 40) + 0);
    var num7 = Math.floor((Math.random() * 30) + 0);
    var num8 = Math.floor((Math.random() * 35) + 0);
    var num9 = Math.floor((Math.random() * 255) + 0);
    var num10 = Math.floor((Math.random() * 255) + 0);
    var num11 = Math.floor((Math.random() * 255) + 0);
    document.getElementById("hair").src = "img/hair"+num1+".png";
    document.getElementById("eyes").src = "img/eyes"+num2+".png";
    document.getElementById("nose").src = "img/nose"+num3+".png";
    document.getElementById("mouth").src = "img/mouth"+num4+".png";
    document.getElementById("first").value = num5;
    document.getElementById("second").value = num6;
    document.getElementById("third").value = num7;
    document.getElementById("forth").value = num8;
    document.getElementById("hair").style.width = num5 + "%";
    document.getElementById("eyes").style.width = num6 + "%";
    document.getElementById("nose").style.width = num7 + "%";
    document.getElementById("mouth").style.width = num8 + "%";
    preview.style.backgroundColor = "rgb("+num9+", "+num10+", "+num11+")";
};

document.getElementById("Auto").addEventListener("click", function(){
    timer = setInterval(function(){
        randomFace();
        createFace();
    }, 500);
});

document.getElementById("Stop").addEventListener("click",function(){
    clearInterval(timer);
    timer = null;
});