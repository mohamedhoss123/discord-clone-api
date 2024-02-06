# how to run
first run your mysql database server <br>
then copy the content from `.example.env` to a file called `.env`<br>
then change `DATABASE_URL` variable with the your db credentials<br>
run the following commands
```bash
pnpm install
pnpm db:generate
pnpm db:migrate
pnpm dev
```

# api docs
if you want to go to api docs then go to url `/api-docs`






