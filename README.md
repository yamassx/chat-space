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
|username|string|null: false|
### Association
- has_many :message
- has_many :group
- has_many :member

## messagesテーブル
|Column|Type|Options|
|------|----|-------|

|text|text|null: false|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|created_at|timestamp|
|updated_at|timestamp|

### Association
- belongs_to :user
- belongs_to :groupe

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|title|string|null: false|

### Association
- has_many :user
- has_many :message
- has_many :member

## membersテーブル
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
