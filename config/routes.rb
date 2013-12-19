LoanProject::Application.routes.draw do
   root 'welcome#index'
   resources :totals, only: [:index]
end
