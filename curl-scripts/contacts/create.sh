curl "http://localhost:4741/contacts" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "contact": {
      "name": "'"${NAME}"'",
      "email": "'"${EMAIL}"'",
      "industry": "'"${INDUSTRY}"'"
    }
  }'

echo
