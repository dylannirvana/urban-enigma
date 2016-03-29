// (server-side)
// setup the email templates...
Meteor.startup(function() {
  if(process.env.NODE_ENV !== 'development'){
    process.env.MAIL_URL = 'smtp://postmaster%40sandboxbd4687485a2a4e4ab4956dae1e904345.mailgun.org:705243d31673b27018ac1825be1a895e@smtp.mailgun.org:587';
  } else {
    console.log('DEVELOPMENT MODE: Email will be printed to console');
  }
  // By default, the email is sent from no-reply@meteor.com. If you wish to receive email
  // from users asking for help with their account,
  // be sure to set this to an email address that you can receive email at.
  Accounts.emailTemplates.from = 'GateKeyMusic <no-reply@GateKeyMusic.com>';

  // The public name of your application. Defaults to the DNS name of the application (eg: awesome.meteor.com).
  Accounts.emailTemplates.siteName = 'GateKeyMusic.io';

  // A Function that takes a user object and returns a String for the subject line of the email.
  Accounts.emailTemplates.verifyEmail.subject = function(user) {
    return 'Confirm Your Email Address';
  };

  // A Function that takes a user object and a url, and returns the body text for the email.
  // Note: if you need to return HTML instead, use Accounts.emailTemplates.verifyEmail.html
  //
  Accounts.emailTemplates.verifyEmail.html = function(user, url) {
    // the url from the accounts module blows so lets modify it just a bit...
    var emailValidationUrl = (function(originalUrl) {

      var s = originalUrl.split('/');
      return s[0] + '//' + s[2] + '/' + s[4] + '/' + s[5];

    })(url);

    //var html = Blaze.toHTMLWithData(Template.verifyEmail, dataContext);

    var EMAIL_HTML = 'Please confirm your email by clicking on this link '+ emailValidationUrl;
    return EMAIL_HTML;
  };


  Accounts.emailTemplates.resetPassword.html = function(user, url) {
    var EMAIL_HTML = '<head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">'+
    '<meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0;">'+
    '<title>Reset password</title>'+
    '<style type="text/css"> body{width: 100%; background-color: #F1F2F7; margin:0; padding:0; -webkit-font-smoothing: antialiased; font-family: arial;}html{width: 100%;}table{font-size: 14px; border: 0;}/* ----------- responsive ----------- */ @media only screen and (max-width: 640px){/*------ top header ------ */ .header-bg{width: 440px !important; height: 10px !important;}.main-header{line-height: 28px !important;}.main-subheader{line-height: 28px !important;}.container{width: 440px !important;}.container-middle{width: 420px !important;}.mainContent{width: 400px !important;}.main-image{width: 400px !important; height: auto !important;}.banner{width: 400px !important; height: auto !important;}/*------ sections ---------*/ .section-item{width: 400px !important;}.section-img{width: 400px !important; height: auto !important;}/*------- prefooter ------*/ .prefooter-header{padding: 0 10px !important; line-height: 24px !important;}.prefooter-subheader{padding: 0 10px !important; line-height: 24px !important;}/*------- footer ------*/ .top-bottom-bg{width: 420px !important; height: auto !important;}}@media only screen and (max-width: 479px){/*------ top header ------ */ .header-bg{width: 280px !important; height: 10px !important;}.top-header-left{width: 260px !important; text-align: center !important;}.top-header-right{width: 260px !important;}.main-header{line-height: 28px !important; text-align: center !important;}.main-subheader{line-height: 28px !important; text-align: center !important;}/*------- header ----------*/ .logo{width: 260px !important;}.nav{width: 260px !important;}.container{width: 280px !important;}.container-middle{width: 260px !important;}.mainContent{width: 240px !important;}.main-image{width: 240px !important; height: auto !important;}.banner{width: 240px !important; height: auto !important;}/*------ sections ---------*/ .section-item{width: 240px !important;}.section-img{width: 240px !important; height: auto !important;}/*------- prefooter ------*/ .prefooter-header{padding: 0 10px !important;line-height: 28px !important;}.prefooter-subheader{padding: 0 10px !important; line-height: 28px !important;}/*------- footer ------*/ .top-bottom-bg{width: 260px !important; height: auto !important;}}</style><style type="text/css" charset="utf-8"> /** reset styling **/.firebugResetStyles{z-index: 2147483646 !important; top: 0 !important; left: 0 !important; display: block !important; border: 0 none !important; margin: 0 !important; padding: 0 !important; outline: 0 !important; min-width: 0 !important; max-width: none !important; min-height: 0 !important; max-height: none !important; position: fixed !important; transform: rotate(0deg) !important; transform-origin: 50% 50% !important; border-radius: 0 !important; box-shadow: none !important; background: transparent none !important; pointer-events: none !important; white-space: normal !important;}.firebugBlockBackgroundColor{background-color: transparent !important;}.firebugResetStyles:before, .firebugResetStyles:after{content: "" !important;}/**actual styling to be modified by firebug theme**/.firebugCanvas{display: none !important;}/* ------------------------- */.firebugLayoutBox{width: auto !important; position: static !important;}.firebugLayoutBoxOffset{opacity: 0.8 !important; position: fixed !important;}.firebugLayoutLine{opacity: 0.4 !important; background-color: #000000 !important;}.firebugLayoutLineLeft, .firebugLayoutLineRight{width: 1px !important; height: 100% !important;}.firebugLayoutLineTop, .firebugLayoutLineBottom{width: 100% !important; height: 1px !important;}.firebugLayoutLineTop{margin-top: -1px !important; border-top: 1px solid #999999 !important;}.firebugLayoutLineRight{border-right: 1px solid #999999 !important;}.firebugLayoutLineBottom{border-bottom: 1px solid #999999 !important;}.firebugLayoutLineLeft{margin-left: -1px !important; border-left: 1px solid #999999 !important;}/* ----------------- */.firebugLayoutBoxParent{border-top: 0 none !important; border-right: 1px dashed #E00 !important; border-bottom: 1px dashed #E00 !important; border-left: 0 none !important; position: fixed !important; width: auto !important;}.firebugRuler{position: absolute !important;}.firebugRulerH{top: -15px !important; left: 0 !important; width: 100% !important; height: 14px !important; border-top: 1px solid #BBBBBB !important; border-right: 1px dashed #BBBBBB !important; border-bottom: 1px solid #000000 !important;}.firebugRulerV{top: 0 !important; left: -15px !important; width: 14px !important; height: 100% !important; border-left: 1px solid #BBBBBB !important; border-right: 1px solid #000000 !important; border-bottom: 1px dashed #BBBBBB !important;}.overflowRulerX > .firebugRulerV{left: 0 !important;}.overflowRulerY > .firebugRulerH{top: 0 !important;}/* --------------------------------- */.fbProxyElement{position: fixed !important; pointer-events: auto !important;}</style>'+
    '</head><body leftmargin="0" topmargin="0" marginheight="0" marginwidth="0"><table border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td height="30"></td></tr><tr bgcolor="#F1F2F7"><td align="center" bgcolor="#F1F2F7" valign="top" width="100%"><table class="container" align="center" border="0" cellpadding="0" cellspacing="0" width="600"> <tbody> <tr bgcolor="ff6600"><td height="15"></td></tr><tr bgcolor="ed3b4b"> <td align="center">'+
    '<table class="container-middle" align="center" border="0" cellpadding="0" cellspacing="0" width="560"> <tbody><tr> <td>'+
    '<table class="top-header-left" align="left" border="0" cellpadding="0" cellspacing="0"> <tbody><tr> <td align="center">'+
    '<table class="date" border="0" cellpadding="0" cellspacing="0"> <tbody><tr> <td> </td><td>&nbsp;&nbsp;</td><td style="color: #fefefe; font-size: 11px; font-weight: normal; font-family: Helvetica, Arial, sans-serif;"> <singleline> </singleline> </td></tr></tbody></table> </td></tr></tbody></table> <table class="top-header-right" align="left" border="0" cellpadding="0" cellspacing="0"> <tbody><tr><td height="20" width="30"></td></tr></tbody></table> <table class="top-header-right" align="right" border="0" cellpadding="0" cellspacing="0"> <tbody><tr> <td align="center"> <table class="tel" align="center" border="0" cellpadding="0" cellspacing="0"> <tbody><tr> <td> </td><td>&nbsp;&nbsp;</td>'+
    '<td style="color: #fefefe; font-size: 11px; font-weight: normal; font-family: Helvetica, Arial, sans-serif;"> <singleline> </singleline> </td></tr></tbody></table> </td></tr></tbody></table> </td></tr></tbody></table> </td></tr><tr bgcolor="ed1f32"><td height="10"></td></tr></tbody>'+
    '</table><table class="container" align="center" border="0" cellpadding="0" cellspacing="0" width="600" bgcolor="ffffff"><tr><td height="35"></td></tr><tr> <td> <table class="container-middle" align="center" border="0" cellpadding="0" cellspacing="0" width="560" bgcolor="F1F2F7"> <tr > <td> <table class="mainContent" align="center" border="0" cellpadding="0" cellspacing="0" width="528"> <tbody><tr><td height="20"></td></tr><tr> <td> <table class="section-item" align="left" border="0" cellpadding="0" cellspacing="0"> <tbody><tr><td height="6"></td></tr><tr> <td><a href="" style="width: 150px; display: block;"><img style="display: block;" src="http://gatekeymusic.com/images/logo-245.png" alt="image1" class="section-img" height="auto" width="150"></a></td></tr><tr><td height="10"></td></tr></tbody></table> <table align="left" border="0" cellpadding="0" cellspacing="0"> <tbody><tr><td height="30" width="30"></td></tr></tbody></table> <table class="section-item" align="left" border="0" cellpadding="0" cellspacing="0" width="340"> <tbody><tr> <td style="color: #484848; font-size: 16px; font-weight: normal; font-family: Helvetica, Arial, sans-serif;"> Reset password </td></tr><tr><td height="15"></td></tr><tr> <td style="color: #a4a4a4; line-height: 25px; font-size: 12px; font-weight: normal; font-family: Helvetica, Arial, sans-serif;">'+
    'You can reset your password by clicking the link below'+
    '</td></tr><tr><td height="15"></td></tr><tr> <td> <a href='+url+' style="background-color: #2c3e50; font-size: 12px; padding: 10px 15px; color: #fff; text-decoration: none; display: block; width: 89%; text-align:center;"> Reset</a> </td></tr></tbody></table> </td></tr><tr><td height="20"></td></tr></tbody></table> </td></tr></table> </td></tr><tr><td height="35"></td></tr></td></tr><tr><td height="30"></td></tr></tbody></table></body></html>';

    return EMAIL_HTML;
  }
});
