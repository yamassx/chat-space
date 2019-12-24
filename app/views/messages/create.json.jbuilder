
json.text @message.text
json.group_id @message.group_id
json.user_name @message.user.name
json.created_at @message.created_at.strftime("%Y/%m/%d %H:%M")
json.image @message.image.url
json.id @message.id

# .match(/\d{4}-\d{2}-\d{2}/)