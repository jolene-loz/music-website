

        let cart = [];

        function Product(name, price, image) {
            this.name = name;
            this.price = price;
            this.image = image;
        }


        var image = document.getElementById("image");
        var overlay = document.getElementById("overlay");

        image.addEventListener("mouseover", function() {
            overlay.style.display = "block";
            });

        image.addEventListener("mouseout", function() {
            overlay.style.display = "none";
            });

        /*let product1 = new Product("Sticker 1", 9.99, "sticker1.jpg");
        let product2 = new Product("Sticker 2", 14.99, "sticker2.jpg");
        let product3 = new Product("Sticker 3", 19.99, "sticker3.jpg");

        function addToCart(product) {
            cart.push(product);
            updateCart();
        }

        //function removeFromCart(product) {
        //    let index = cart.indexOf(product);
        //    if (index != -1) {
        //        cart.splice(index, 1);
        //        updateCart();
        //    }
       // } */

        function updateCart() {
            let cartContainer = document.getElementById("cart");
            cartContainer.innerHTML = "";
            let total = 0;


            for (let i = 0; i < cart.length; i++) {
                let product = cart[i];
                let productElement = document.createElement("div");
                productElement.classList.add("cart-product");

                let productImage = document.createElement("img");
                productImage.src = product.image;
                productImage.alt = product.name;
                productElement.appendChild(productImage);

                let productInfo = document.createElement("div");
                productInfo.innerHTML = `<h4>${product.name}</h4><p>$${product.price.toFixed(2)}</p>`;
                productElement.appendChild(productInfo);

                let removeButton = document.createElement("button");
                removeButton.innerHTML = "Remove";
                removeButton.addEventListener("click", function() {
                    removeFromCart(product);
                });
                productElement.appendChild(removeButton);

                cartContainer.appendChild(productElement);

                
                total += product.price;
            }
            
            let totalElement = document.getElementById("cart-total");
            totalElement.innerHTML = `Total: $${total.toFixed(2)}`;
        }


        
        addToCart(product1);
        addToCart(product2);
