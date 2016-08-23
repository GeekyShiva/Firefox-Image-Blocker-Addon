var { ToggleButton } = require("sdk/ui/button/toggle");
var prefService = require("sdk/preferences/service");
var imagePermission = "permissions.default.image";

var button = ToggleButton({
    id: 'simpleImageBlocker',
    label: 'Simple Image Blocker',
    icon: {
        16: './icon-16.png',
        32: './icon-32.png',
        64: './icon-64.png',
    },
    badge: 'D',
    badgeColor: '#00AABB',
    onChange: changeImagePermission

});

function changeImagePermission(state) {
    if (state.checked){
        button.badge = 'A';
        button.badgeColor = '#BBAA00';
        prefService.set(imagePermission, 2);
    }
    else{
        button.badge = 'D';
        button.badgeColor = '#00AABB';
        prefService.set(imagePermission, 1);
    }
    
}