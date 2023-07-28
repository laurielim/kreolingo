PHONY :=

.DEFAULT_GOAL := help

PHONY += help
help: ## List all make commands
	$(call step,Available make commands:\n)
	@cat $(MAKEFILE_LIST) | grep -e "^[a-zA-Z_\-]*: *.*## *" | awk 'BEGIN {FS = ":.*?## "}; {printf "${CYAN}%-30s${NO_COLOR} %s\n", $$1, $$2}' | sort

PHONY += fresh
nvm: ## Switch node version based on .nvmrc and run pnpm run dev
	$(call step,Run nvm use\n)
	. ${HOME}/.nvm/nvm.sh && nvm use && pnpm run dev

.PHONY: $(PHONY)