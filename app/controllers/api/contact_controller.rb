class Api::ContactController < ApplicationController

   def contact
    ApplicationMailer.contact(contact).deliver
    
  end
end
