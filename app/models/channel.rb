# == Schema Information
#
# Table name: channels
#
#  id          :bigint           not null, primary key
#  title       :string
#  description :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Channel < ApplicationRecord
  # All channels have a title and description, unless they are direct chats
  # Direct chats are channels that have no title or description
  validates :title, uniqueness: true, allow_nil: true

  has_many :messages,
    foreign_key: :channel_id,
    class_name: 'Message'

  has_many :channel_memberships,
    foreign_key: :channel_id,
    class_name: 'ChannelMembership'

  has_many :members,
    through: :channel_memberships,
    source: :member

end
