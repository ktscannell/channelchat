# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker';

10.times do 
  Channel.create(
    title: Faker::Movies::StarWars.planet,
    description: Faker::Movies::StarWars.wookiee_sentence
  )
end

10.times do
  User.create(
    username: Faker::Movies::StarWars.character,
    password: 'hunter12'
  )
end

Channel.all.each do |channel|
  10.times do
    character = User.all.sample
    message = channel.messages.new
    message.body = Faker::Movies::StarWars.quote()
    message.author = character
    message.save
  end
end

User.create(
  username: 'Demo User',
  password: 'hunter12'
)


