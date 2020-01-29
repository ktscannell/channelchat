# == Schema Information
#
# Table name: channel_memberships
#
#  id         :bigint           not null, primary key
#  member_id  :integer          not null
#  channel_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class ChannelMembership < ApplicationRecord
  validates :member_id, :channel_id, presence: true
  
  belongs_to :channel,
    foreign_key: :channel_id,
    class_name: 'Channel'

  belongs_to :member,
    foreign_key: :member_id,
    class_name: 'User'
end
