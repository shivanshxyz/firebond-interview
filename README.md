# Instructions to install
1. Create .env.local and insert your thirdweb client id as `NEXT_PUBLIC_THIRDWEB_CLIENT_ID=`
2. `npm install`
3. `npm run dev`

- The application uses the mumbai testnet. Here are some faucets to get test MATIC:
    - [https://faucet.polygon.technology/](https://faucet.polygon.technology/)
    - [https://mumbaifaucet.com/](https://mumbaifaucet.com/)

Deployed link - [https://firebond-interview.vercel.app/](https://firebond-interview.vercel.app/)

# Thoughts
This was a very well rounded assignment I had to deploy, interact and read the smart contracts along with wallet handling and utilizing my frontend skills.

I took this assignment as a challenge to try to stick to the Firebond tech stack and used it as a learning opportunity since I never worked with Thirdweb previously

# Challenges Faced
The main challenge that I faced was mainly due to a problem caused by the Thirdweb documentation error.

In the React docs, it was mentioned that to deploy contracts, we have to utilise `ThirdwebSDKProvider` instead of `ThirdwebProvider`. I followed the documentation but I was not able to access the SDK functions. I was throwing all sorts of error and it wasted an entire day after trying all applying all sorts of fixes

I escalated the issue with the Thirdweb support team on discord and even they were not able to fix it. By chance I bruteforced the `useSDK()` with `ThirdwebProvider` and I was sucessfully able to deploy it. The thirdweb team was also surprised and now they are fixing this issue now regarding `ThirdwebSDKProvider` not working

### I would have completed this assignment a day earlier if it weren't for that error 🤯

# Areas I focused on

- Tech Stack
    - Next.js, Thirdweb, Tailwind
    - I tried to use the exact tech stack used at Firebond because I wanted to use this assignment as a learning opportunity as well once I start working at Firebond

- Core Functionality
    - I implemeted all the core functionality I was asked to
    - /create
        - Deploy custom ERC20 tokens ✅
        - Set aside 100 tokens to be claimed ✅
        - Each wallet cannot claim more than 5 tokens ✅
    - /claim/[token_address]:
        - Claim token button ✅
        - fetch token info ✅
        - display balance ✅
        - show how many tokens have been claimed ✅

- Code Quality
    - Used auto-formatting for clean code
    - stored the API key into a seperate .env file to avoid accidental exposure
    - Added well explained comments wherever required

- UI
    - Used tailwind to create and attractive and responsive UI out of the box

