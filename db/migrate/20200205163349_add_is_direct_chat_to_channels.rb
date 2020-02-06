class AddIsDirectChatToChannels < ActiveRecord::Migration[5.2]
  def change
    add_column :channels, :direct, :boolean, null: false, default: false
  end
end
