require 'rails_helper'

describe BooksController, :type => :controller do
  describe "#index" do
    it "returns all books" do
      FactoryGirl.create(:book)
      get :index
      expect(JSON.parse(response.body).length).to eq(1)
    end
  end
end
