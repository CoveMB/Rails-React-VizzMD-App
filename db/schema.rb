# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_09_18_175227) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bodies", force: :cascade do |t|
    t.bigint "patient_id"
    t.text "note"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["patient_id"], name: "index_bodies_on_patient_id"
  end

  create_table "exercices", force: :cascade do |t|
    t.bigint "traitment_id"
    t.string "name"
    t.integer "fequency"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["traitment_id"], name: "index_exercices_on_traitment_id"
  end

  create_table "muscles", force: :cascade do |t|
    t.bigint "body_id"
    t.string "name"
    t.integer "force"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["body_id"], name: "index_muscles_on_body_id"
  end

  create_table "nerves", force: :cascade do |t|
    t.bigint "muscle_id"
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["muscle_id"], name: "index_nerves_on_muscle_id"
  end

  create_table "patients", force: :cascade do |t|
    t.string "hospital_patient_id"
    t.integer "age"
    t.integer "height"
    t.integer "weight"
    t.string "gender"
    t.text "notes"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "team_patients", force: :cascade do |t|
    t.bigint "patient_id"
    t.bigint "team_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["patient_id"], name: "index_team_patients_on_patient_id"
    t.index ["team_id"], name: "index_team_patients_on_team_id"
  end

  create_table "teams", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "traitments", force: :cascade do |t|
    t.bigint "body_id"
    t.text "notes"
    t.integer "duration"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["body_id"], name: "index_traitments_on_body_id"
  end

  create_table "user_teams", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "team_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["team_id"], name: "index_user_teams_on_team_id"
    t.index ["user_id"], name: "index_user_teams_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "hospital_employee_id"
    t.string "hospital_id"
    t.string "name"
    t.string "surname"
    t.string "type"
    t.boolean "admin", default: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "bodies", "patients"
  add_foreign_key "exercices", "traitments"
  add_foreign_key "muscles", "bodies"
  add_foreign_key "nerves", "muscles"
  add_foreign_key "team_patients", "patients"
  add_foreign_key "team_patients", "teams"
  add_foreign_key "traitments", "bodies"
  add_foreign_key "user_teams", "teams"
  add_foreign_key "user_teams", "users"
end
