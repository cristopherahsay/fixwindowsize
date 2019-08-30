cordova.commandProxy.add("windowResize",{
    uwp: function (successCallback, errorCallback, datas) {
        if( cordova.platformId == 'windows'){
            var ViewManagement = Windows.UI.ViewManagement;
            var ApplicationView = ViewManagement.ApplicationView;
            var view = ApplicationView.getForCurrentView();
            view.tryResizeView({ width: 1024, height: 768 });

            document.addEventListener("keydown", function(event){
                if (event.ctrlKey==true && (event.which == '61' || event.which == '107' || event.which == '173' || event.which == '109'  || event.which == '187'  || event.which == '189'  ) ) {
                    console.log(event);
                    event.preventDefault();
                 }
            });
            
            document.addEventListener("mousewheel", function(event){console.log(event);event.preventDefault();}, { passive: false });

            window.addEventListener("resize", function(){
                if(view.visibleBounds.width < 959 || view.visibleBounds.height < 768){
                    view.tryResizeView({ width: 959, height: 768 });
                } else {
                    successCallback();
                }
            });
            
        }
    }
});