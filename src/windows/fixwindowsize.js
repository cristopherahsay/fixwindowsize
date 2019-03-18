cordova.commandProxy.add("windowResize",{
    uwp: function (successCallback, errorCallback, datas) {
        if( cordova.platformId == 'windows'){
            var ViewManagement = Windows.UI.ViewManagement;
            var ApplicationView = ViewManagement.ApplicationView;
            var view = ApplicationView.getForCurrentView();
            view.tryResizeView({ width: 1024, height: 768 });

            window.addEventListener("resize", function(){
                if(view.visibleBounds.width < 1024 || view.visibleBounds.height < 768){
                    view.tryResizeView({ width: 1024, height: 768 });
                } else {
                    successCallback();
                }
            });
            
        }
    }
});