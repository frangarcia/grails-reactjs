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
        <script src="//unpkg.com/react@15.3.2/dist/react.js"></script>
        <script src="//unpkg.com/react-dom@15.3.2/dist/react-dom.js"></script>
        <script src="//unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
        <script src="//unpkg.com/jquery@3.1.0/dist/jquery.min.js"></script>
        <script src="//unpkg.com/remarkable@1.7.1/dist/remarkable.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/react-bootstrap/0.30.5/react-bootstrap.min.js"></script>
        <g:layoutHead/>
    </head>
    <body>
        <div class="container-fluid">
            <!-- Static navbar -->
            <div class="navbar navbar-default navbar-static-top" role="navigation">
                <div class="container" id="navigation">

                </div>
            </div>


            <div id="modal" class="modal-container"></div>
            <div class="container-fluid">
                <g:layoutBody/>
            </div> <!-- /container -->
        </div>
    <asset:javascript src="application.js"/>
    </body>
</html>
