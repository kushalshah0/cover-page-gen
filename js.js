let coverCanvas;
    function makeScreenshot() {
        html2canvas(document.getElementById("coverLetter"), { scale: 2 }).then(canvas => {
            coverCanvas = canvas;
            //var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
            //window.location.href=image;

            var link = document.getElementById('link');
            link.setAttribute('download', 'coverLetter.png');
            link.setAttribute('href', coverCanvas.toDataURL("image/png").replace("image/png", "image/octet-stream"));
        });
    }

    let isGetReq = isGetRequest();
    if (isGetReq) {
        document.getElementById('root').innerHTML = "";


        let name = getQueryVariable("name");
        let email = getQueryVariable("email");
        let phone = getQueryVariable("phone");
        let dname = getQueryVariable("dname");
        let dnamee = getQueryVariable("dnamee");
        let entryArea = ""
        let notes = ""
        name = name.replace("+", " ");
        email = email.replace("%40", "@");
	    let date = new Date();
	    date = date.toDateString();


        switch (dnamee) {
            case "name":
                entryArea = "individuals, by name";
                notes = "open ccTLD, any person or entity is permitted to register";
                break;
            case "com":
                entryArea = "commercial";
                notes = "open ccTLD, any person or entity is permitted to register";
                break;
            case "pro":
                entryArea = "professions";
                notes = "reserved for licensed or certified lawyers, accountants, physicians and engineers in Nepal.";
                break;
            case "info":
                entryArea = "information";
                notes = "This is an open ccTLD; any person or entity is permitted to register.";
                break;
            case "biz":
                entryArea = "business";
                notes = "open ccTLD; any person or entity is permitted to register;";
                break;
        }



        document.getElementById('dlbtn').innerHTML =
            `
        <div id ="download">
            <a id="link">
                <button class="btn btn-lg btn-success" id="download">
                    Download
                </button>
            </a>
        </div>
        `
        document.getElementById('root2').innerHTML =
            `

	<div id="coverLetter">
		<div id="myInfo">
			<b class="name">`+ name + `</b><br/>
			<b>Email:</b> `+ email + `<br/>
			<b>Mobile:</b> `+ phone + `<br/>
		</div><br/>
		<div id="clear"></div>
		<div id="hostMaster">
			The HostMaster<br/>
			NP ccTLD Registration Services<br/>
			Mercantile Communications Pvt. Ltd.<br/>
			Email: hostmaster@mercantile.com.np<br/>
		</div><br/>
		<div id="clear"></div>
		<div id="date">`+ date +`</div><br/><br/>
		<div id="clear"></div>
		<div id="subject">
			<b>Subject: Application for `+ dname + `.` + dnamee + `.np domain registration</b>
		</div><br/>
		<div id="clear"></div>
		<div id ="message">Dear Sir/Madam,<br/>
			I am writing to request the registration of domain under my name `+ name + ` with domain ` + dname + `.` + dnamee + `.np. <br/><br/>
			Applying for registration of the domain `+ dname + `.` + dnamee + `.np follows all the term and conditions of Domain registration residing at “https://register.com.np/terms-and-conditions”. I submit the required for the domain registrations as per the rule.<br/><br/>
			Thank you for “helping the industry and civil society to make them online”. Entry area for .`+ dnamee + `.np is "` + entryArea + `" and Notes is "` + notes + `" as mentioned on “https://register.com.np/np-ccTLDs”.<br/><br/>
			I would be very grateful indeed for your help. Needless to say, I will be glad to supply you with any further information you may need.
			I look forward to hearing from you soon.</div><br/>
		<div id="clear"></div>
		<div id="name">
		Your Sincerely,<br/>
		`+ name + `</div>
	</div>


        `;
        makeScreenshot();

    } else {
        document.getElementById('root').innerHTML =
            `
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-md-offset-3">
                    <h2>Np Domain Registration Cover Letter Generator</h2>
                    <p>Vist <a href="help">Help Section</a> for How to fill the form and How to save the Generated Cover Lette</p>
                    <form role="form" method="get" id="reused_form" >
                        <div class="form-group">
                            <label for="name"> Name:</label>
                            <input type="text" class="form-control" id="name" name="name" required maxlength="50">
                        </div>
                        <div class="form-group">
                            <label for="email"> Email:</label>
                            <input type="email" class="form-control" id="email" name="email" required maxlength="50">
                        </div>
                        <div class="form-group">
                            <label for="phone"> Phone:</label>
                            <input type="text" class="form-control" id="phone" name="phone" required maxlength="50">
                        </div>
                        <div class="form-group">
                            <label for="dname"> Domain Name:</label>
                            <input type="text" class="form-control" id="dname" name="dname" required maxlength="50">
                        </div>
                        <div class="form-group">
                            
                            <label for="dnamee"> Domain Name Extension:</label>
                            
                            <select class="form-control" id="dnamee" name="dnamee" required>
                            	<option value="com">com.np</option>
                            	<option value="info">info.np</option>
                            	<option value="name">name.np</option>
                            	<option value="pro">pro.np</option>
                            	<option value="biz">biz.np</option>
                            </select>
                        </div>
                        <button class="btn btn-lg btn-success pull-right" id="btnContactUs">Generate &rarr;</button>
                    </form>
                </div>
            </div>
        </div>
        <footer>
		</footer>

        `
    }

    function getQueryVariable(variable) {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            if (pair[0] == variable) { return pair[1]; }
        }
        return (false);
    }

    function isGetRequest() {
        var query = window.location.search.substring(1);
        //if (query.length == 0) {
        //    return false;
        //} else {
        //    return true;
        //}
        //fix error of getting any query other than required. eg ?fb=adf from fb referal
        if(getQueryVariable("name") && getQueryVariable("email") && getQueryVariable("phone") && getQueryVariable("dname") && getQueryVariable("dnamee")){
        	return true;
        } else {
        	return false;
        }
    }
