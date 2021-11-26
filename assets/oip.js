(function() {
    window.OIP = {
        mode:'prod',
        s3_host:'https://super-qr-codes.s3.amazonaws.com',
        host:'https://oip.toolstr.com',
        settings:{"enabled":false,"theme":{"bg_color":"#ffffff","text_color":"#000000","PO":"#000000","PI":"#000000","AO":"#000000","AI":"#000000","icon_container_shape":"round","icon_container_position":"top-left","css":{"top-left":"position:fixed;left:10px;top:200px;","top-right":"position:fixed;right:10px;top:200px;","bottom-left":"position:fixed;left:10px;bottom:200px;","bottom-right":"position:fixed;right:10px;bottom:200px;","round":"width:100px;height:100px;border-radius:50px;padding: 15px;cursor: pointer;"},"description_text_font_size":"big","qr_bg_image":null,"qr_logo_image":null},"pages":{"home":{"enabled":true,"title":"Home Page","subtitle":"Make sure to enable and save settings before checking.","qr_text":null,"description_text":"Scan this qr code from your phone's camera or any other scanner app.","description_text_font_size":"big","description_text_relative_position":"below"},"product":{"enabled":true,"title":"Product Page","subtitle":"Make sure to enable and save settings before checking.","qr_text":null,"description_text":"Scan this qr code from your phone's camera or any other scanner app.","description_text_font_size":"big","description_text_relative_position":"below"},"collection":{"enabled":true,"title":"Products Listing Page","subtitle":"Make sure to enable and save settings before checking.","qr_text":null,"description_text":"Scan this qr code from your phone's camera or any other scanner app.","description_text_font_size":"big","description_text_relative_position":"below"},"searchresults":{"enabled":true,"title":"Search Results Page","subtitle":"Make sure to enable and save settings before checking.","qr_text":null,"description_text":"Scan this qr code from your phone's camera or any other scanner app.","description_text_font_size":"big","description_text_relative_position":"below"},"order_status":{"enabled":true,"title":"Order Status Page","subtitle":"Make sure to enable and save settings before checking.","qr_text":null,"description_text":"Scan this qr code from your phone's camera or any other scanner app.","description_text_font_size":"big","description_text_relative_position":"below"},"page":{"enabled":true,"title":"Pages","subtitle":"Make sure to enable and save settings before checking.","qr_text":null,"description_text":"Scan this qr code from your phone's camera or any other scanner app.","description_text_font_size":"big","description_text_relative_position":"below"},"blog":{"enabled":true,"title":"Blog\/Article","subtitle":"Make sure to enable and save settings before checking.","qr_text":null,"description_text":"Scan this qr code from your phone's camera or any other scanner app.","description_text_font_size":"big","description_text_relative_position":"below"},"account":{"enabled":true,"title":"Account","subtitle":"Make sure to enable and save settings before checking.","qr_text":null,"description_text":"Scan this qr code from your phone's camera or any other scanner app.","description_text_font_size":"big","description_text_relative_position":"below"},"cart":{"enabled":true,"title":"Cart","subtitle":"Make sure to enable and save settings before checking.","qr_text":null,"description_text":"Scan this qr code from your phone's camera or any other scanner app.","description_text_font_size":"big","description_text_relative_position":"below"}},"version":"1.5"},
        visible:false,
        cart:{},
        qrcode:{},
        qrcode_options:{
            dotScale: 1,
            tooltip:false,
            logoBackgroundTransparent:true,
            backgroundImageAlpha:.3
        },
        init:function(){
            const page = OIP.detectPage();
            if (OIP.settings.enabled && OIP.settings.pages.hasOwnProperty(page) && OIP.settings.pages[page].enabled === true) {
                const oip_page = OIP.settings.pages[page];
                var html = `    <div id="oip_icon_container" style="text-align:center;z-index:50;background-color:`+OIP.settings.theme.bg_color+`;color:`+OIP.settings.theme.text_color+`;`+OIP.settings.theme.css[OIP.settings.theme.icon_container_position]+OIP.settings.theme.css[OIP.settings.theme.icon_container_shape]+`" onclick="OIP.toggleQrCode()">
                                    <div id="oip_qr_icon" style="margin:10% auto;"></div>
                                </div>                            
                               <div id="oip_widget_container" style="display:none;width:100%;height:100%;position:fixed;left:0;top:0;overflow:auto;z-index:50;background-color: rgba(0,0,0,0.4);text-align: center;">
                                <div id="oip_widget_content" style="margin:10% auto; padding:20px;width:50%; text-align:center;background-color:`+OIP.settings.theme.bg_color+`;color:`+OIP.settings.theme.text_color+`;">
                                    <div id="oip_widget_header" style="width:100%;height:30px;"><span style="float:right;color:`+OIP.settings.theme.text_color+`;cursor:pointer;padding:5px;" onclick="$('#oip_widget_container').hide();OIP.visible=false;">X</span></div>
                                    <div id="oip_qr_container" style="padding:10px;">
                                        <div id="oip_qr"></div>
                                        <br>
                                        <`+oip_page.description_text_font_size+`>`+oip_page.description_text+`</`+oip_page.description_text_font_size+`>
                                    </div>
                                </div>
                            </div>`;
                document.body.insertAdjacentHTML('afterbegin', html);
                var regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
                if(oip_page.qr_text == '' || oip_page.qr_text == null){
                    oip_page.qr_text = window.location.href;
                }
                if (regexp.test(oip_page.qr_text)){
                    var url = new URL(oip_page.qr_text);
                    url.searchParams.append('utm_source','qr-code-scan');
                    OIP.qrcode_options.text = url.href;
                }else{
                    OIP.qrcode_options.text = oip_page.qr_text || '';
                }
                OIP.qrcode_options.colorDark = OIP.settings.theme.text_color;
                OIP.qrcode_options.colorLight = OIP.settings.theme.bg_color;
                OIP.qrcode_options.width = window.outerWidth/5;
                OIP.qrcode_options.height = window.outerWidth/5;
                OIP.qrcode_options.correctLevel = QRCode.CorrectLevel.H;
                OIP.qrcode_options.backgroundImage = OIP.settings.theme.qr_bg_image;
                OIP.qrcode_options.logoWidth = OIP.qrcode_options.width/5;
                OIP.qrcode_options.logoHeight = OIP.qrcode_options.height/5;
                OIP.qrcode_options.logo = OIP.settings.theme.qr_logo_image;
                OIP.qrcode_options.PO = OIP.settings.theme.PO;
                OIP.qrcode_options.PI = OIP.settings.theme.PI;
                OIP.qrcode_options.AO = OIP.settings.theme.AO;
                OIP.qrcode_options.AI = OIP.settings.theme.AI;
                OIP.qrcode = new QRCode(document.getElementById("oip_qr"), OIP.qrcode_options);
                var qr_icon_options = OIP.qrcode_options;
                qr_icon_options.text = '##########';
                qr_icon_options.width = $('#oip_icon_container').outerWidth()/2;
                qr_icon_options.height = $('#oip_icon_container').outerWidth()/2;
                qr_icon_options.logoWidth = qr_icon_options.width/5;
                qr_icon_options.logoHeight = qr_icon_options.height/5;
                qr_icon_options.PO = OIP.settings.theme.PO;
                qr_icon_options.PI = OIP.settings.theme.PI;
                qr_icon_options.AO = OIP.settings.theme.AO;
                qr_icon_options.AI = OIP.settings.theme.AI;
                var qr_icon = new QRCode(document.getElementById("oip_qr_icon"), qr_icon_options);
            }
        },
        toggleQrCode:function () {
            var elem = $('#oip_widget_container');
            if(OIP.visible){
                elem.hide();
                OIP.visible = false;
            }else{
                OIP.getCart(function(cart){
                    OIP.cart = cart;
                    if(OIP.detectPage() == 'cart'){
                        var url = new URL(window.location.href);
                        url.searchParams.append('utm_source','qr-code-scan');
                        url.searchParams.append('restore_cart_token',OIP.cart.token);
                        OIP.qrcode.makeCode(url.href);
                        $.ajax({
                            url: OIP.host+'/api/cart',
                            type: 'post',
                            dataType: 'json',
                            contentType: 'application/json',
                            success: function (data) {
                                // console.log(data);
                            },
                            data: JSON.stringify({store_url:Shopify.shop,token:OIP.cart.token,cart:OIP.cart})
                        });
                    }
                });
                elem.show();
                OIP.visible = true;
            }
        },
        detectPage : function () {
            if (ShopifyAnalytics.meta.page.hasOwnProperty('pageType')) {
                switch (ShopifyAnalytics.meta.page.pageType){
                    case 'blog':
                    case 'article':
                        return 'blog';
                    default:
                        return ShopifyAnalytics.meta.page.pageType;
                }
            }
            if (window.location.href.indexOf(window.location.host + '/cart') !== -1) {
                return 'cart';
            }
            if (window.location.href.indexOf(window.location.host + '/account') !== -1) {
                return 'account';
            }
            if (ShopifyAnalytics.meta.page.hasOwnProperty('path') && ShopifyAnalytics.meta.page.path == '/checkout/thank_you') {
                return 'order_status';
            }
            if (window.location.href.indexOf('/orders/') !== -1) {
                return 'order_status';
            }
        },
        getCart:function(callback){
            if(OIP.mode == 'preview'){
                callback({});
                return false;
            }
            $.getJSON('/cart.js',function(cart){
               callback(cart);
            });
        },
        restoreCart: function(){
            OIP.getCart(function(cart){
                OIP.cart = cart;
            });
            const token  = OIP.getParameterByName('restore_cart_token');
            const store_url  = Shopify.shop;
            $.getJSON(OIP.s3_host+'/'+store_url+'/'+token+'.json',function(cart){
                if(cart.hasOwnProperty('token')){
                    $.post('/cart/add.js', {
                        items: cart.items,
                        note: cart.note,
                        attributes:cart.attributes||{}
                    },function(items){
                        window.location.replace(window.location.href.replace('?restore_cart_token='+token,'').replace('&restore_cart_token='+token,''));
                    },"json");
                }
            });
        },
        getParameterByName : function(name, url) {
            if (!url) url = window.location.href;
            name = name.replace(/[\[\]]/g, '\\$&');
            var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, ' '));
        }
    };
    if(!/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)){
        if(window.settings && window.dashboard_token){
            OIP.settings = JSON.parse(JSON.stringify(window.settings));
            OIP.mode = 'preview';
            window.Shopify = {shop:window.shop_url};
            window.ShopifyAnalytics = {meta:{page:{pageType:'preview'}}};
            OIP.settings.pages.preview = JSON.parse(JSON.stringify(OIP.settings.pages.home));
            OIP.settings.pages.preview.enabled = true;
            OIP.settings.pages.preview.qr_text = 'https://toolstr.com';
            OIP.settings.pages.preview.description_text = 'This is preview description text. Your text settings will reflect on your website.';
            OIP.settings.pages.preview.description_text_font_size = 'big';
        }
        if(typeof jQuery=='undefined') {
            var headTag = document.getElementsByTagName("head")[0];
            var jqTag = document.createElement('script');
            jqTag.type = 'text/javascript';
            jqTag.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js';
            jqTag.onload=loadQrScript;
            headTag.appendChild(jqTag);
        }else{
            loadQrScript();
        }
        function loadQrScript() {
            var script = document.createElement('script');
            script.id = 'qr_script';
            script.src = OIP.s3_host + '/js/easy.qrcode.min.4.3.3.js';
            script.onload = OIP.init;
            document.body.appendChild(script);
            if(window.location.search.indexOf('qr_announce') !== -1){
                document.body.insertAdjacentHTML('afterbegin',`
                    <style>
                      .announcement-bar {
                        background-color: `+OIP.settings.theme.bg_color+`;
                        text-align: center;
                        text-decoration: none;
                      }
                      .announcement-bar__message {
                        font-size: large;
                        padding: 10px;
                        color: `+OIP.settings.theme.text_color+`
                      }
                    </style>
                    <div class="announcement-bar">
                        <p class="announcement-bar__message">`+OIP.getParameterByName('qr_announce')+`</p>
                    </div>`);
            }
        }
    }else{
        if(window.location.search.indexOf('restore_cart_token') !== -1){
            OIP.restoreCart();
        }
    }
})();