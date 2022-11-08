puts "Begin Seeding ⏳"

15.times do
    User.create(
        first_name: Faker::Name.first_name,
        last_name: Faker::Name.last_name,
        city: "Dallas",
        age: rand(18..32),
        email: Faker::Internet.email,
        description: Faker::Hipster.sentences(number: 1),
        password: '1234'
    )
end

casey = User.create(
    first_name: 'Casey',
    last_name: 'Ramirez',
    city: "Dallas",
    age: 23,
    email: 'test',
    description: 'microwave go mrrrrrrrrrrrr.....',
    password: '1234'
)

10.times do
    Posting.create(
        user_id: User.all.sample.id,
        distance: rand(0..7),
        date: DateTime.current(),
        location: "Dallas"
    )
end

20.times do
    Walk.create(
        user_one_id: User.all.sample.id,
        user_two_id: User.all.sample.id,
        distance: rand(0..7),
        location: "Dallas",
        date: DateTime.current()
    )
end

puts "Seeding Complete ⏳"