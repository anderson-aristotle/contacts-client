curl "http://localhost:4741/contacts/${ID}" \
  --include \
  --request PATCH \
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
