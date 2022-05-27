var updateCartButtons = document.getElementsByClassName('update-cart');

for(var i = 0; i < updateCartButtons.length; i++){
    console.log(updateCartButtons[i])
    updateCartButtons[i].addEventListener('click', function(){
        var productId = this.dataset.product;
        var action = this.dataset.action;
        console.log(productId, action);

        console.log('USER: ', user);
        if(user === 'AnonymousUser'){
            console.log('User is not logged in');
        } else {
            console.log('User is logged in');
        }
    })
}