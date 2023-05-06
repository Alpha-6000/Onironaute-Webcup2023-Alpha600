Clone your project
`git clone https://github.com/Alpha-6000/Onironaute-Webcup2023-Alpha600.git`
Go to the folder application using cd command on your cmd or terminal
`cd Alpha-6000/Onironaute-Webcup2023-Alpha600`
Create a branch
`git switch -c your-new-branch-name`

Run `composer install `on your cmd or terminal
Copy .env.example file to .env on the root folder. You can type `copy .env.example .env` if using command prompt Windows or `cp .env.example .env` if using terminal, Ubuntu

Open your .env file and change the database name (DB_DATABASE) to whatever you have, username (DB_USERNAME) and password (DB_PASSWORD) field correspond to your configuration.
Run `php artisan key:generate`
Run `php artisan migrate`
Run `php artisan serve`
Go to http://localhost:8000/

Make Your change

`git add Contributors.md`
`git commit -m "Add some change"`

Push your change
`git push origin -u <add-your-branch-name>`

Compare and create a Pull Request