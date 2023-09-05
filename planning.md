<h2>P3 Planning:<br/>
Gallarray <i>(art e-commerce)</i></h2>

<h4>LINK TO TRELLO BOARD: https://trello.com/b/fFhjddUz/project-3</h4>

<h4>PAGES:</h4>
* Homepage:
    * Nav bar with links to gallery, artists, shopping cart, and account
    * User login authentication - Google OAuth API

* Gallery page:
    * Maximum 2 items per row
    * Filter left sidebar for selecting item categories

* Exhibit page:
    * Displays exhibit containing all details

* Artists page:
    * Maximum 4 artist cards per row
    * Displays detail of artist's name, rating, where they are from, avatar

* Profile page:
    * Displays datils about the artist and their belonging exhibits

* Account page


<h4>MODELS:</h4>

* item:
    * image: [artSchema]
    * title: (string, required)
    * category: [category]
    * price: (number, required)
    * artist: (artist)

* art:
    * url: (string, required)
    * alt: (string, required)

* artist:
    * userId: (string, required)
    * email: (string, required)
    * phone: (string, required)
    * place: (string, required)
    * avatar: (string, required)

* category:
    * name: (string, required)


<h4>ICEBOX MODELS:</h4>

* artist:
    * address: (string, required)

* artistReview
    * user reviews of product
    * content: (string, required)
    * user: (artist)

* cart:
    * item: [item]
    * qty: (number)

* payment:
    * payment type
    * payment API - Paypal
    * user id (ref user model)
    * order (ref order model)
    * order number (id)
    * order timestamp


<h4>ICEBOX PAGES:</h4>

* Shopping cart:
    * Displays list of each item containing the title, image, price, artist(name & avatar)

* Account page