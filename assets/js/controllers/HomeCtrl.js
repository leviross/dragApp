app.controller('HomeCtrl', ['$scope',function($scope){

    //alert('home ctrl');
    //console.log("app has started!");
    $scope.onDragComplete = function(data,evt){
      console.log("drag success, data: ",data);
    }

    $scope.onDropComplete = function(data,evt){
        console.log("drop success, data: ",data);
    }

    $scope.centerAnchor = true;
    $scope.toggleCenterAnchor = function () {$scope.centerAnchor = !$scope.centerAnchor}
    //Wish I had time to query the DB and do a put method every time I drag, I really want to work on this.
    //I just wanted to show an MVP
    $scope.draggableObjects = [{name:'http://cesie.org/media/Connected-to-the-Nature_thumbnail.jpg'}, {name:'http://images.bestday.com/_lib/images/editorial/Atracciones-Naturales-en-Puerto-Vallarta/thumbnail.jpg'}, {name:'http://bitewallpapers.com/nature/summer/summer%209%20thumbnail.jpg'}, {name:'http://wallpaperdave.com/tfrt13.jpg'}, {name:'http://www.tapeciarnia.one.pl/data/thumbnails/597/Nature_2560x1600_021.jpg'}, {name:'http://rmarch.com/Imaging/JPEG_PHOTOS/THUMBNAIL/006.jpg'}];


    $scope.droppedObjects1 = [];
    $scope.droppedObjects2= [];
    //Rewrote these 3 functions to be versatile and accept drags from all other divs
    //For some weird reason, when dragging from Archive to Favorite and vice versa, it will delete an image in the
    //image gallery. TODO: fix this!
    $scope.onDropOriginal=function(data,evt){
        var index1 = $scope.droppedObjects1.indexOf(data);
        var index2 = $scope.droppedObjects2.indexOf(data);
        if(index1 > -1){
            $scope.draggableObjects.push(data);
            $scope.droppedObjects1.splice(index1,1);
        }else{
            $scope.draggableObjects.push(data);
            $scope.droppedObjects2.splice(index2,1);
        }
    }
    $scope.onDropComplete1=function(data,evt){
        var index2 = $scope.droppedObjects2.indexOf(data);
        var indexOfOriginal = $scope.draggableObjects.indexOf(data);
        if(index2 > -1){
            $scope.droppedObjects1.push(data);
            $scope.droppedObjects2.splice(index2,1);
        }else{
            $scope.droppedObjects1.push(data);
            $scope.draggableObjects.splice(indexOfOriginal,1);
        }
    }
    $scope.onDropComplete2=function(data,evt){
        var index1 = $scope.droppedObjects1.indexOf(data);
        var indexOfOriginal = $scope.draggableObjects.indexOf(data);
        if(index1 > -1){
            $scope.droppedObjects2.push(data);
            $scope.droppedObjects1.splice(index1,1);
        }else{
            $scope.droppedObjects2.push(data);
            $scope.draggableObjects.splice(indexOfOriginal,1);
        }
    }
    $scope.onDragSuccess1=function(data,evt){
        console.log("133","$scope","onDragSuccess1", "", evt);
        var index = $scope.droppedObjects1.indexOf(data);
        if (index > -1) {
            $scope.droppedObjects1.splice(index, 1);
        }
    }
    $scope.onDragSuccess2=function(data,evt){
        var index = $scope.droppedObjects2.indexOf(data);
        if (index > -1) {
            $scope.droppedObjects2.splice(index, 1);
        }
    }
    //I dont see this being used in the repo ever
    var inArray = function(array, obj) {
        var index = array.indexOf(obj);
    }


}]);