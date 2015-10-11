<!DOCTYPE html>
<!--[if lt IE 7 ]> <html lang="en" class="no-js ie6"> <![endif]-->
<!--[if IE 7 ]>    <html lang="en" class="no-js ie7"> <![endif]-->
<!--[if IE 8 ]>    <html lang="en" class="no-js ie8"> <![endif]-->
<!--[if IE 9 ]>    <html lang="en" class="no-js ie9"> <![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--> <html lang="en" class="no-js"><!--<![endif]-->
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title><g:layoutTitle default="Grails"/></title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="shortcut icon" href="${assetPath(src: 'favicon.ico')}" type="image/x-icon">
        <link rel="apple-touch-icon" href="${assetPath(src: 'apple-touch-icon.png')}">
        <link rel="apple-touch-icon" sizes="114x114" href="${assetPath(src: 'apple-touch-icon-retina.png')}">
        <asset:stylesheet src="application.css"/>
        <g:layoutHead/>
    </head>
    <body>
        <div class="container-fluid">
            <!-- Static navbar -->
            <div class="navbar navbar-default navbar-static-top" role="navigation">
                <div class="container" id="navigation">

                </div>
            </div>

            <div id="content"></div>
            <div id="modal" class="modal-container"></div>
            <div class="container-fluid">
                <g:layoutBody/>
            </div> <!-- /container -->
        </div>
    <script src="//fb.me/react-0.14.0.js"></script>
    <script src="//fb.me/react-with-addons-0.14.0.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/react-bootstrap/0.27.1/react-bootstrap.min.js"></script>
    <asset:javascript src="application.js"/>
    <asset:javascript src="spring-websocket" />
    </body>
</html>
