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
    name: "San Francisco, CA, USA",
    label: "San Franscisco"
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

Industry.create!(
    name: "Entertainment"
)

Industry.create!(
    name: "Energy"
)

puts "Industries Seeded ⏳"

walking = Activity.create!(
    name: 'Walk'
)

hiking = Activity.create!(
    name: 'Hike'
)

biking = Activity.create!(
    name: 'Bike'
)

running = Activity.create!(
    name: 'Run'
)

puts "Activities Seeded ⏳"

# casey = User.create(
#     first_name: 'Casey',
#     last_name: 'Ramirez',
#     city_id: dallas.id,
#     industry_id: tech.id,
#     company: 'Google',
#     job_title: 'Software Engineer',
#     password: '1234',
#     password_confirmation: '1234',
#     email: 'test@test.com',
#     description: "Hi, I'm Casey I'm based in Dallas, Texas and interested in all things tech!",
# )

# roy = User.create(
#     first_name: 'Roy',
#     last_name: 'Lee',
#     city_id: dallas.id,
#     industry_id: tech.id,
#     company: 'Apple',
#     job_title: 'Software Engineer',
#     password: '1234',
#     password_confirmation: '1234',
#     email: 'test1@test.com',
#     description: "Hi, I'm Roy!",
# )


# 3.times do
#     Posting.create(
#         user_id: casey.id,
#         activity_id: walking.id,
#         distance: rand(1..4),
#         date: DateTime.current(),
#         location: "Denver, CO, USA",
#         isFilled: false
#     )
# end

# 2.times do
#     Walk.create(
#         user_one_id: casey.id,
#         user_two_id: User.all.sample.id,
#         activity_id: walking.id,
#         distance: rand(0..7),
#         location: "Denver, CO, USA",
#         date: DateTime.current()
#     )
# end

# walk = Walk.create(
#     user_one_id: casey.id,
#     user_two_id: User.all.first.id,
#     distance: rand(0..7),
#     location: "Denver, CO, USA",
#     date: DateTime.current()
# )

# 3.times do
#     Message.create(
#         sender_id: casey.id,
#         reciever_id: User.first.id,
#         walk_id: walk.id,
#         message: Faker::Quote.yoda
#     )
# end

# 3.times do
#     Message.create(
#         sender_id: User.first.id,
#         reciever_id: casey.id,
#         walk_id: walk.id,
#         message: Faker::Quote.yoda
#     )
# end

# puts "Test User Seeded ⏳"

puts "Seeding Complete ⏳"