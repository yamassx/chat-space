# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation



* Database initialization

 ## usersテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|email|string|null: false|
|password|string|null: false|
|name|string|null: false|
### Association
- has_many :messages
- has_many :members
- has_many :groups　through: :members


## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|image|string|
|text|text|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|created_at|timestamp|
|updated_at|timestamp|

### Association
- belongs_to :user
- belongs_to :group

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|name|string|null: false|

### Association
- has_many :users trough: :group_users
- has_many :messages
- has_many :group_users

## group_usersテーブル
|Column|Type|Options|
|------|----|-------|
|groupe_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user



* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
