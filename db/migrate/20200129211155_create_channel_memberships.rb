class CreateChannelMemberships < ActiveRecord::Migration[5.2]
  def change
    create_table :channel_memberships do |t|
      t.integer :member_id, null: false
      t.integer :channel_id, null: false

      t.index [:channel_id, :member_id], unique: true

      t.timestamps
    end
  end
end
