## What is Goodpoints(Hint: Loyalty Squared!)

Goodpoints is a social good loyalty platform built using Square Loyalty API that allows Square's sellers and merchants to build meaningful and deep relationships with their customers by allowing them to use the loyalty points that they earned from purchases at their stores to donate to social causes & charities that they care about. 

***Goodpoints means Loyalty Squared*** :P

![Square and Goodpoints](https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/750/322/datas/original.png)

## Inspiration

### Problem I'm trying to solve

These days, the significance of building real and lasting customer loyalty goes without question. Many businesses and brands, on the other hand, are struggling to stay relevant as customers move away from transactional interactions with their favorite brands in search of new ways to connect with their own drive to do more, to do more for everyone. 

Businesses are being encouraged to take things to the next level by engaging and connecting with their members in increasingly meaningful and personal ways. Square is used by businesses of all size. "How can we strengthen relationships with our consumers and communities at the same time?" is a question that should be on the minds of most merchants and businesses that use Square. Well, Goodpoints platform could be the solution.

#### Goodpoints + Square = Increased customer loyalty and trust
  
![Customers use the link to visit Goodpoints site, where they can login with their mobile number connected to their loyalty account.](https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/750/064/datas/original.png)

### Sample use-case examples

Large businesses that use Square such as Shake Shack could use Goodpoints platform to allow their customers to use their Square loyalty points to donate to causes and charities that they care about. This will not only increase customer trust and loyalty for the Shake Shack brand, but also make customers feel good.

A small local restaruant can use Goodpoints to allow customers to make donations using their points to local causes and non-profits that are working on local issues. This will help the restaurnt in gaining the trust of not just the customer but also the local community.

### I'm a business who uses Square. Will my customers use their points to donate to charity rather than buying a product for themselves?

While traditional redemption components such as gift cards, merchandise and cash continue to play an important role, adopting newer, more compelling redemption strategies and options which include social good components in loyalty programs will provide businesses with the competitive advantage they need to stay ahead of the curve and respond to the rapidly changing consumer mindset. Social Good Loyalty is a real revolution that is being driven by a generation of people who truly want to take pride in the products they buy, the companies with whom they align, and to feel empowered to support their local communities. 

Research shows that companies are increasingly broadening their loyalty programs to incorporate their brand mission and take position on issues that are important not just to them, but also to their consumers.A large retailer just created a new social good loyalty program in which customers decide how much money the company donates to each of thousands of community charities. And the list of charity changes every quarter to keep it thematically relevant and responsive to current events. The figures from this program are incredible. The store built stronger relationships with tens of millions of program participants and donated millions of dollars to thousands of charity through the program.

Brands can utilize social good loyalty platforms such as Goodpoints to build stronger bonds with customers by supporting issues that are personal, relevant, and local. I believe there is a tremendous opportunity for companies to connect with and invest in their people, their communities, and their purpose. 


### Any research/studies that support this?

According to Motista statistics, emotional connections translate into a bigger percentage of consumer spending, with loyal consumers paying twice as much and having a 300 percent higher lifetime value. We are currently witnessing a boom in community spirit, with consumers and companies more eager than ever to support social, environmental, and community activities. Brands that allow their customers to give to a cause they care about should expect to see higher levels of emotional engagement and loyalty because they are tapping into something they already care about – their favorite charity. 

Below figure shows statistics on donations made by Americans to charity. Observe how many millenials gave to charity and how much more likely millenials might give monthly over a large donation:

![Stats](https://thewisemarketer.com/wp-content/uploads/2020/08/427bn-to-Charity.png.webp)

If customers were to donate money from their own pockets to charity(See above image), don't you think they will donate a portion of their loyalty points? Since millenials care about the causes, don't you think they will care about businesses who care for their causes! 

## How does it help Square's sellers and businesses?

Consumers are increasingly expecting that companies utilize their position to make a difference, and rewarding customers to use their points to make charity donations can help you build more meaningful relationships and demonstrate that you're a purpose-driven company.

There are two advantages to including donations in your reward program:

- Boost your brand's image: It acts as a constant reminder to your consumers that your company is committed to social impact, highlighting the fact that giving is one of your top objectives.

- Encourage more customers to sign up for your rewards program: It also encourages more consumers to sign up for your loyalty program, resulting in more purpose-driven purchases, more real connections, and higher customer lifetime value.

## How it works?

- Square's merchants and businesses should enroll in Square's Loyalty program to use this product. 
- After a Square merchant enrolls in Square's Loyalty program, they can enroll their business on Goodpoints to allow their customers to use their loyalty points for making donations to non-profits, causes and charities that they care about. Optionally, merchants can add their own choices of non-profits. Merchants also need to choose how many dollars each point is equivalent to.
- Goodpoints creates a unique URL and QR code for the business or merchants. Merchants can give this URL to their customers, which can be used by the customers to access Merchant specific Goodpoints site.
- Customers use the link to visit Goodpoints site, where they can login with their mobile number connected to their loyalty account.
  
    ![Customers use the link to visit Goodpoints site, where they can login with their mobile number connected to their loyalty account.](https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/750/067/datas/original.png)

- Customers use their points to donate to charities of their choice.
  
  ![Customers use their points to donate to charities of their choice. ](https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/750/066/datas/original.png)

- Customer receives a confirmation about the donation. 
  
  ![Customer receives a confirmation about the donation.](https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/750/065/datas/original.png)

- Customers also can check their previous donation transactions made on Goodpoints.

    ![Customers also can check their previous donation transactions made on Goodpoints.](https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/750/068/datas/original.png)

## How I built it

I used **Square's Loyalty API** and **Customer API** to build Goodpoints web application. Goodpoints uses **Square's Loyalty API** to fetch a customer's point balance and allow customers to donate their points to causes and charities that both customers and businesses care about.


## How to use the app

Follow the steps listed below to use the web application:

1. Go to the link https://fathomless-brushlands-77696.herokuapp.com/
2. Use the test mobile number 4255551111 to login
3. Click on check in to login with your rewards account and see your point balance.
4. Now, you can scroll down the page to look for a list of non-profits that you can donate to.
5. Click on a non-profit whom you would like to donate to and enter the amount you would like to donate.
6. Click "Confirm donation" to confirm your donation. You will see a confirmation page after your donation is processed successfully. Your point balance is also updated.
7. Click "My Transactions" button on homepage to see all your Goodpoints transactions made using the Square loyalty points.

If you'd like to instead run your own version of the app on your local system or a cloud server, follow the steps mentioned below:

1. Clone the Github repository using the following command

    ```
    git clone https://github.com/sumanthreddym/goodpoints.git
    ```

2. Change directory using the following command

    ```
    cd goodpoints
    ```

3. Go to Square dashboard and create a loyalty program in your sandbox account.
4. Copy your SQUARE_APPLICATION_ID and SQUARE_ACCESS_TOKEN of your sandbox environment. Create a file called .env and paste the credentials there using the following format:
   ```
    SQUARE_APPLICATION_ID=your-application-id
    SQUARE_ACCESS_TOKEN=your-access-token
   ```

5. Run the folowing commands to install dependencies and start the server in sandbox mode:  

    ```
    npm install
    npm test
    ```

6. Open your browser and go to localhost:3000 to view the website. Then follow the steps mentioned previously to use the web application.

## Challenges I ran into

While thinking about this idea, I initially thought that businesses wouldn't be willing to use this kind of a loyalty platform. Then, I started my research on how brands could build customer engagement by connecting their loyalty programs and donations. I believe this sort of social loyalty platform is essential for sustainable growth of all modern businesses. Initially, It was difficult to get myself up and running with Square's sandbox environment, but the Square's youtube videos really helped.

## What I learnt and Accomplishments I'm proud of

This was the first time I used Square APIs. It was quite an inspiration to learn how Square plays a vital role in enabling every business to have access to financial tools. I learnt more about the need for businesses to make social impact to stay relevant. 

I love the app that I built and hope that it enables Square's businesses not only to strengthen relationships with their customers but also allow Square's customers to make a lasting impact to the ecosystem that they operate in.

## What's next for Goodpoints
- Feature for users to automatically enroll for a charity of their choice so that all points that a user earns are automatically sent to the charity.
- Publish the app on Square marketplace so that all Square's sellers can use them.
- Feature to allow merchants to offer gift cards to customers on Goodpoints which customers can use to send to charities or friends.
- Add feature for users to share their donations on social media platforms. This will allow more visibility for Square's businesses and serve as free marketing for them.
- Feature for customers to redeem their loyalty points for gift items from the merchant's catalog.
- Allow customers to use loyalty points to make purchases at other small businesses in the community.
- Allow customer to use loyalty points to pay tips to cashiers, waiters and other employees instead of redeeming points for themselves.
