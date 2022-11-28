class Activity < ApplicationRecord
    has_many :walks
    has_many :postings
end
