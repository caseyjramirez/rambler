puts "Begin Seeding ⏳"

dallas = City.create!(
    name: "Dallas, TX, USA",
    label: "Dallas"
)
City.create!(
    label: "Austin",
    name: "Austin, TX, USA"
)
City.create!(
    name: "Los Angeles, CA, USA",
    label: "Los Angeles"
)
City.create!(
    name: "Denver, CO, USA",
    label: "Denver"
)
City.create!(
    name: "New York, NY, USA",
    label: "New York"
)

puts "Cities Seeded ⏳"

tech = Industry.create!(
    name: "Tech"
)

Industry.create!(
    name: "Finance"
)

Industry.create!(
    name: "Real Estate"
)

Industry.create!(
    name: "Health Care"
)

Industry.create!(
    name: "Public Services"
)

Industry.create!(
    name: "Education"
)

puts "Industries Seeded ⏳"




15.times do
    User.create(
        first_name: Faker::Name.first_name,
        last_name: Faker::Name.last_name,
        city_id: City.all.sample.id,
        industry_id: Industry.all.sample.id,
        company: Faker::Company.name,
        job_title: Faker::Job.title,
        email: Faker::Internet.email,
        password: '1234',
        password_confirmation: '1234',
        description: Faker::Quote.yoda,
    )
end


puts "Users Seeded ⏳"

10.times do
    Posting.create(
        user_id: User.all.sample.id,
        distance: rand(1..4),
        date: DateTime.current(),
        location: "Austin, TX, USA",
        isFilled: false
    )
end

20.times do
    Walk.create(
        user_one_id: User.all.sample.id,
        user_two_id: User.all.sample.id,
        distance: rand(0..7),
        location: "Austin, TX, USA",
        date: DateTime.current()
    )
end

puts "Post + Walk Seeded ⏳"


casey = User.create(
    first_name: 'Casey',
    last_name: 'Ramirez',
    city_id: dallas.id,
    industry_id: tech.id,
    company: 'Google',
    job_title: 'Software Engineer',
    password: '1234',
    password_confirmation: '1234',
    email: 'test@test.com',
    description: "Hi, I'm Casey I'm interested in all things tech!",
)

3.times do
    Posting.create(
        user_id: casey.id,
        distance: rand(1..4),
        date: DateTime.current(),
        location: "Denver, CO, USA",
        isFilled: false
    )
end

7.times do
    Walk.create(
        user_one_id: casey.id,
        user_two_id: User.all.sample.id,
        distance: rand(0..7),
        location: "Denver, CO, USA",
        date: DateTime.current()
    )
end

walk = Walk.create(
    user_one_id: casey.id,
    user_two_id: User.all.sample.id,
    distance: rand(0..7),
    location: "Denver, CO, USA",
    date: DateTime.current()
)

10.times do
    Message.create(
        sender_id: casey.id,
        reciever_id: User.all.sample.id,
        walk_id: walk.id,
        message: Faker::Quote.yoda
    )
end

puts "Test User Seeded ⏳"

puts "Seeding Complete ⏳"