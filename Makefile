PHONY :=

.DEFAULT_GOAL := help

PHONY += help
help: ## List all make commands
	$(call step,Available make commands:\n)
	@cat $(MAKEFILE_LIST) | grep -e "^[a-zA-Z_\-]*: *.*## *" | awk 'BEGIN {FS = ":.*?## "}; {printf "${CYAN}%-30s${NO_COLOR} %s\n", $$1, $$2}' | sort

PHONY += fresh
fresh: ## Switch node version based on .nvmrc and run pnpm run dev
	$(call step,Run nvm use and pnpm run dev\n)
	. ${HOME}/.nvm/nvm.sh && nvm use && pnpm run dev

PHONY += build
build: ## Switch node version based on .nvmrc and run pnpm run build then pnpm run preview
	$(call step,Run nvm use, pnpm run build and pnpm run preview\n)
	. ${HOME}/.nvm/nvm.sh && nvm use && pnpm run build && pnpm run preview

.PHONY: $(PHONY)