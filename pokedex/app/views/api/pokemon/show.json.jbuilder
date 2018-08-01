json.pokemon do
  json.extract! @char, :id, :name, :attack, :defense, :moves, :poke_type
  json.image_url asset_path(@char.image_url)
  json.item_ids @char.item_ids
end


json.items do
  @char.items.each do |item|
    json.set! item.id do
      json.extract! item, :id, :name, :pokemon_id, :price, :happiness
      json.image_url asset_path(item.image_url)
    end
  end
end
