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
end
