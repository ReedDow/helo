create table helo_users(
    user_id serial primary key,
    username varchar(20),
    email varchar(150),
    password varchar(250)m,
    profile_picture text
);

create table if not exists post (
    post_id serial primary key,
    user_id int references helo_user(user_id),
    post_url text
);

alter table helo_users alter column password type text;

insert into helo_users(username, email, password, profile_picture)
values('BingoBob', 'Bingo@bingo.com', 'bobsburgers', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ3aufrrTuvRz4Vkl6e6kNwf-vtuqc_nXl81g&usqp=CAU'),
('SayanSue', 'SuperSayan@gmail.com', 'Goku4Life', 'https://i.pinimg.com/originals/6c/59/2f/6c592ff1d73a347355f6d88f11272c2b.png');