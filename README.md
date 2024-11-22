Import Repo to Gitpod/Codespace
Step 2: nano .env
Step 3: PRIVATE_KEY=INPUT PRIVATE KEY
Step 4: TO DEPLOY: 
npx hardhat run scripts/deploy.js --network m1

STEP 5: TO WITHDRAW:
Copy the deployed contract address
Navigate to Scripts/Withdraw.js file at your top left side of your screen 
Then paste the address in line 10(const Address) as a string ""
Then save

STEP 6: RUN NPX COMMAND 
npx hardhat run scripts/withdraw.js --network m1
