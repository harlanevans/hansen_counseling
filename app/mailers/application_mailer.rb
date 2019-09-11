class ApplicationMailer < ActionMailer::Base
  default from: 'harlanevans5@gmail.com'
  layout 'mailer'

  def contact(contact)
    mail(to: contact.email, subject: "Test Email")
  end
end
