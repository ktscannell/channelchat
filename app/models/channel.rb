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
  validates :title, uniqueness: true, allow_nil: true
  validates :direct, inclusion: { in: [true, false] }

  has_many :messages,
    foreign_key: :channel_id,
    class_name: 'Message'

  has_many :channel_memberships,
    foreign_key: :channel_id,
    class_name: 'ChannelMembership'

  has_many :members,
    through: :channel_memberships,
    source: :member

  # direct chats don't have a title in the database
  # instead, generate a title that is unique to the current user
  def generate_direct_chat_title(current_member)
    
    other_members = self.members.reject { |member| member == current_member }
    if other_members.length == 1
      other_members.first.username
    elsif other_members.length == 2
      "#{other_members.first.username} and 1 other"
    else
      number_to_display = other_members.length - 1
      "#{other_members.first.username} and #{number_to_display} others"
    end
  end
end
