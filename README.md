### Warning!
- *laravel_backend* folder is only for learning and test laravel backend.
- *react_frontend* folder is only for learning and test react frontend.

### Please focus on <ins>Final</ins> Folder
...
### Tables of database

- The Software_Project table is used to store my software projects from past to present. which tells all the details of the project
  |Software_Project      |      
  |----------------------|
  |id: bigIncrements     |
  |name: string          |
  |language: string      |
  |framwork: string      |
  |tool: string          |
  |project_url: text     |
  |mockup_url: text      |
  |demo_url: text        |
  |date: string          |
  |description: text     |
  |timestamps: timestamps|
- The General table is used to store my general information.
  |General               |
  |----------------------|
  |id: bigIncrements     |
  |fname: string         |
  |lname: string         |
  |profile_url: text     |
  |timestamps: timestamps|
- The Education table is used to store my current education.
  |Education             |
  |----------------------|
  |id: bigIncrements     |
  |university: string    |
  |faculty: string       |
  |major: string         |
  |level: string         |
  |grade: string         |
  |timestamps: timestamps|
- The About table is used to store what is relevant to me and what I want to present.
  |About                 |
  |----------------------|
  |id: bigIncrements     |
  |about: text           |
  |timestamps: timestamps|
- The Contact table is used to store all my contact channels.
  |Contact               |
  |----------------------|
  |id: bigIncrements     |
  |email: string         |
  |phone_number: string  |
  |address: text         |
  |linkedin: text        |
  |github: text          |
  |facebook: text        |
  |instagram: text       |
  |timestamps: timestamps|
- The Major_Skill table is used to store technical skills I've learned, such as software processes, OOP, programming languages.
  |Major_Skill           |
  |----------------------|
  |id: bigIncrements     |
  |major_skill: string   |
  |timestamps: timestamps|
- The Soft_Skill table is used to store my life skills such as teamwork, responsibility, time management.
  |Soft_Skill            |
  |----------------------|
  |id: bigIncrements     |
  |soft_skill: string    |
  |timestamps: timestamps|


