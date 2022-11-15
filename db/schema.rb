# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_11_15_160554) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cities", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "label"
  end

  create_table "industries", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "postings", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.integer "distance"
    t.datetime "date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "location"
    t.boolean "isFilled"
    t.index ["user_id"], name: "index_postings_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "description"
    t.string "password_digest"
    t.string "profile_photo"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "city_id"
    t.bigint "industry_id"
    t.string "company"
    t.string "job_title"
    t.string "password_confirmation"
    t.index ["city_id"], name: "index_users_on_city_id"
    t.index ["industry_id"], name: "index_users_on_industry_id"
  end

  create_table "walks", force: :cascade do |t|
    t.bigint "user_one_id", null: false
    t.bigint "user_two_id", null: false
    t.integer "distance"
    t.string "location"
    t.datetime "date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_one_id"], name: "index_walks_on_user_one_id"
    t.index ["user_two_id"], name: "index_walks_on_user_two_id"
  end

  add_foreign_key "postings", "users"
  add_foreign_key "users", "cities"
  add_foreign_key "users", "industries"
  add_foreign_key "walks", "users", column: "user_one_id"
  add_foreign_key "walks", "users", column: "user_two_id"
end
