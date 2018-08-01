@chars.each do |char|
  json.set! char.id do
    json.extract! char, :id, :name
    json.image_url asset_path(char.image_url)
  end
end
